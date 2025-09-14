import type {App, Plugin} from 'vue'

/**
 * 表示带有 install 方法的单个文件组件 (SFC)。
 * @template T 组件的类型。
 */
export type SFCWithInstall<T> = T & Plugin

/**
 * 为组件添加 install 方法，使其可以用作 Vue 插件。
 * @template T 主组件的类型。
 * @template E 与主组件一起安装的额外组件的记录。
 * @param main 主组件。
 * @param [extra] 额外组件的可选记录。
 * @returns 增强了 install 方法和额外组件的主组件。
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const withInstall = <T, E extends Record<string, any>>(
    main: T,
    extra?: E
) => {
    (main as SFCWithInstall<T>).install = (app: App): void => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            app.component(comp.name, comp)
        }
    }

    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            (main as any)[key] = comp
        }
    }
    return main as SFCWithInstall<T> & E
}

// TEST
if (import.meta.vitest) {
    const {vi, describe, it, expect, beforeEach} = import.meta.vitest

    describe('withInstall', () => {
        // 模拟一个 Vue App 对象
        const mockApp = {
            component: vi.fn(),
        }

        // 模拟组件
        const MainComponent = {name: 'MainComponent'}
        const ExtraComponent1 = {name: 'ExtraComponent1'}
        const ExtraComponent2 = {name: 'ExtraComponent2'}

        beforeEach(() => {
            // 在每个测试前重置 mock
            vi.clearAllMocks()
        })

        it('应该为组件添加一个 install 方法', () => {
            const componentWithInstall = withInstall({...MainComponent})
            expect(componentWithInstall.install).toBeDefined()
            expect(typeof componentWithInstall.install).toBe('function')
        })

        it('install 方法应该注册主组件', () => {
            const componentWithInstall = withInstall({...MainComponent})
            componentWithInstall.install?.(mockApp as unknown as App)

            expect(mockApp.component).toHaveBeenCalledWith(
                MainComponent.name,
                expect.objectContaining(MainComponent)
            )
            expect(mockApp.component).toHaveBeenCalledTimes(1)
        })

        it('install 方法应该注册主组件和所有额外组件', () => {
            const extra = {Extra1: ExtraComponent1, Extra2: ExtraComponent2}
            const componentWithInstall = withInstall({...MainComponent}, extra)
            componentWithInstall.install?.(mockApp as unknown as App)

            expect(mockApp.component).toHaveBeenCalledTimes(3)
            expect(mockApp.component).toHaveBeenCalledWith(MainComponent.name, expect.any(Object))
            expect(mockApp.component).toHaveBeenCalledWith(ExtraComponent1.name, ExtraComponent1)
            expect(mockApp.component).toHaveBeenCalledWith(ExtraComponent2.name, ExtraComponent2)
        })

        it('应该将额外组件作为属性附加到主组件上', () => {
            const extra = {Extra1: ExtraComponent1, Extra2: ExtraComponent2}
            const componentWithInstall = withInstall({...MainComponent}, extra)

            expect(componentWithInstall.Extra1).toBe(ExtraComponent1)
            expect(componentWithInstall.Extra2).toBe(ExtraComponent2)
        })
    })

}
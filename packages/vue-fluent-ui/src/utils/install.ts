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
export  const withInstall = <T, E extends Record<string, any>>(
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
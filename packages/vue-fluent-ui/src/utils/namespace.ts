/**
 * @fileoverview Vue Fluent UI 组件库 CSS 类名生成工具
 *
 * 这个模块提供了一套简洁高效的 BEM (Block Element Modifier) 风格的 CSS 类名生成工具。
 * 专注于为 Vue Fluent UI 组件库提供统一的命名规范和类名管理。
 *
 * 主要功能：
 * - BEM 风格的类名生成 (Block, Element, Modifier)
 * - 状态类名生成 (is-disabled, is-loading 等)
 * - 统一的命名空间管理
 *
 * @example
 * ```TypeScript
 * // 在组件中使用
 * const ns = useNamespace('button')
 *
 * // 生成各种类名
 * ns.b() // 'vf-button'
 * ns.e('icon') // 'vf-button__icon'
 * ns.m('primary') // 'vf-button--primary'
 * ns.is('disabled') // 'vf-is-disabled'
 * ```
 *
 * @author Vue Fluent UI Team
 * @version 1.0.0
 */


/**
 * 默认的组件库命名空间前缀
 *
 * 用作所有 CSS 类名的前缀，确保组件库的类名不会与其他样式冲突
 *
 * @example 'vf' -> 'vf-button', 'vf-input', 'vf-table' 等
 */
export const defaultNamespace = 'vf'

/**
 * 状态类名前缀
 *
 * 用于生成状态相关的 CSS 类名，遵循常见的状态命名约定
 *
 * @example 'is-' -> 'is-disabled', 'is-loading', 'is-active' 等
 * @internal
 */
const statePrefix = `${defaultNamespace}-is-`

/**
 * 核心 BEM 类名生成函数
 *
 * 根据 BEM (Block Element Modifier) 方法论生成标准化的 CSS 类名。
 * 这是整个命名系统的基础，所有其他函数都依赖于它。
 *
 * @param namespace - 命名空间前缀，通常是 'vf'
 * @param block - 块名，代表组件的名称，如 'button', 'input'
 * @param blockSuffix - 块后缀，用于复合组件，如 'group' (vf-button-group)
 * @param element - 元素名，代表组件内部的子元素，如 'icon' (vf-button__icon)
 * @param modifier - 修饰符名，代表组件的变体或状态，如 'primary' (vf-button--primary)
 *
 * @returns 生成的 CSS 类名字符串
 *
 * @example
 * ```typescript
 * _bem('vf', 'button', '', '', '')         // 'vf-button'
 * _bem('vf', 'button', 'group', '', '')    // 'vf-button-group'  
 * _bem('vf', 'button', '', 'icon', '')     // 'vf-button__icon'
 * _bem('vf', 'button', '', '', 'primary')  // 'vf-button--primary'
 * _bem('vf', 'button', 'group', 'item', 'active') // 'vf-button-group__item--active'
 * ```
 *
 * @internal
 */
const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    // 生成基础类名：命名空间-块名
    let className = `${namespace}-${block}`

    // 添加块后缀（用于复合组件）
    if (blockSuffix) {
        className += `-${blockSuffix}`
    }

    // 添加元素（用双下划线分隔）
    if (element) {
        className += `__${element}`
    }

    // 添加修饰符（用双连字符分隔）
    if (modifier) {
        className += `--${modifier}`
    }

    return className
}

/**
 * Vue Fluent UI 命名空间钩子函数
 *
 * 这是组件库的核心工具函数，为指定的组件块提供一整套 BEM 风格的类名生成工具。
 * 简洁高效，专注于最常用的功能，去除了复杂的配置选项以提高性能和易用性。
 *
 * @param block - 组件的块名，如 'button', 'input', 'table', 'modal' 等
 *
 * @returns 包含各种类名生成工具的对象
 *
 * @example
 * ```TypeScript
 * // 在 Button 组件中使用
 * const ns = useNamespace('button')
 *
 * // 在模板中使用
 * <button :class="[
 *   ns.b(),                      // 'vf-button'
 *   ns.m(type),                  // 'vf-button--primary'
 *   ns.is('disabled', disabled), // 'vf-is-disabled' 或 ''
 *   ns.is('loading', loading)    // 'vf-is-loading' 或 ''
 * ]">
 *   <i :class="ns.e('icon')" v-if="icon"></i>  <!-- 'vf-button__icon' -->
 *   <span :class="ns.e('text')">              <!-- 'vf-button__text' -->
 *     <slot></slot>
 *   </span>
 * </button>
 *
 * // 复杂组件示例 (ButtonGroup)
 * const ns = useNamespace('button')
 * ns.b('group') // 'vf-button-group'
 * ns.be('group', 'item') // 'vf-button-group__item'
 * ns.bm('group', 'vertical') // 'vf-button-group--vertical'
 * ns.bem('group', 'item', 'first') // 'vf-button-group__item--first'
 * ```
 */
export const useNamespace = (
    block: string,
) => {
    // 获取当前的命名空间（这里使用默认值，未来可扩展为可配置）
    const namespace = defaultNamespace

    /**
     * Block - 生成块的类名
     *
     * 生成组件的基础类名，可选择性地添加块后缀来创建复合组件
     *
     * @param blockSuffix - 可选的块后缀，用于生成复合块名
     * @returns CSS 类名字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.b() // 'vf-button'
     * ns.b('group') // 'vf-button-group'
     * ns.b('toolbar') // 'vf-button-toolbar'
     * ```
     */
    const b = (blockSuffix = '') =>
        _bem(namespace, block, blockSuffix, '', '')

    /**
     * Element - 生成元素的类名
     *
     * 生成组件内部子元素的类名，遵循 BEM 的元素命名规范
     *
     * @param element - 元素名，如果未提供则返回空字符串
     * @returns CSS 类名字符串或空字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.e('icon')     // 'vf-button__icon'
     * ns.e('text')     // 'vf-button__text'
     * ns.e('loading')  // 'vf-button__loading'
     * ns.e()           // ''
     * ```
     */
    const e = (element?: string) =>
        element ? _bem(namespace, block, '', element, '') : ''

    /**
     * Modifier - 生成修饰符的类名
     *
     * 生成组件变体的类名，用于表示不同的样式、尺寸、状态等
     *
     * @param modifier - 修饰符名，如果未提供则返回空字符串
     * @returns CSS 类名字符串或空字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.m('primary') // 'vf-button--primary'
     * ns.m('large') // 'vf-button--large'
     * ns.m('outline') // 'vf-button--outline'
     * ns.m() // ''
     * ```
     */
    const m = (modifier?: string) =>
        modifier ? _bem(namespace, block, '', '', modifier) : ''

    /**
     * Block + Element - 生成复合块中元素的类名
     *
     * 为带有后缀的复合组件生成内部元素的类名
     *
     * @param blockSuffix - 块后缀
     * @param element - 元素名
     * @returns CSS 类名字符串，如果参数不完整则返回空字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.be('group', 'item') // 'vf-button-group__item'
     * ns.be('toolbar', 'wrapper') // 'vf-button-toolbar__wrapper'
     * ```
     */
    const be = (blockSuffix?: string, element?: string) =>
        blockSuffix && element
            ? _bem(namespace, block, blockSuffix, element, '')
            : ''

    /**
     * Element + Modifier - 生成元素修饰符的类名
     *
     * 为组件内部的元素生成修饰符类名
     *
     * @param element - 元素名
     * @param modifier - 修饰符名
     * @returns CSS 类名字符串，如果参数不完整则返回空字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.em('icon', 'large') // 'vf-button__icon--large'
     * ns.em('text', 'bold') // 'vf-button__text--bold'
     * ns.em('loading', 'spin') // 'vf-button__loading--spin'
     * ```
     */
    const em = (element?: string, modifier?: string) =>
        element && modifier
            ? _bem(namespace, block, '', element, modifier)
            : ''

    /**
     * Block + Modifier - 生成复合块修饰符的类名
     *
     * 为带有后缀的复合组件生成修饰符类名
     *
     * @param blockSuffix - 块后缀
     * @param modifier - 修饰符名
     * @returns CSS 类名字符串，如果参数不完整则返回空字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.bm('group', 'vertical') // 'vf-button-group--vertical'
     * ns.bm('group', 'compact') // 'vf-button-group--compact'
     * ns.bm('toolbar', 'floating') // 'vf-button-toolbar--floating'
     * ```
     */
    const bm = (blockSuffix?: string, modifier?: string) =>
        blockSuffix && modifier
            ? _bem(namespace, block, blockSuffix, '', modifier)
            : ''

    /**
     * Block + Element + Modifier - 完整的 BEM 组合
     *
     * 生成完整的 BEM 类名，包含块后缀、元素和修饰符
     *
     * @param blockSuffix - 块后缀
     * @param element - 元素名
     * @param modifier - 修饰符名
     * @returns CSS 类名字符串，如果参数不完整则返回空字符串
     *
     * @example
     * ```TypeScript
     * const ns = useNamespace('button')
     * ns.bem('group', 'item', 'active') // 'vf-button-group__item--active'
     * ns.bem('group', 'item', 'first') // 'vf-button-group__item--first'
     * ns.bem('toolbar', 'button', 'hover') // 'vf-button-toolbar__button--hover'
     * ```
     */
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
        blockSuffix && element && modifier
            ? _bem(namespace, block, blockSuffix, element, modifier)
            : ''

    /**
     * State - 生成状态类名
     *
     * 生成表示组件状态的类名，支持条件性应用。
     * 这是一个重载函数，支持两种调用方式：
     * 1. 传入状态名和布尔值进行条件判断
     * 2. 只传入状态名（默认应用该状态）
     *
     * @param name - 状态名，如 'disabled', 'loading', 'active'
     * @param args 实现逻辑，无需在意。
     * @returns 状态类名字符串或空字符串
     *
     * @example
     * ```typescript
     * const ns = useNamespace('button')
     *
     * // 条件性应用状态
     * ns.is('disabled', true)    // 'vf-is-disabled'
     * ns.is('disabled', false)   // ''
     * ns.is('loading', isLoading) // 根据 isLoading 的值决定
     *
     * // 直接应用状态
     * ns.is('disabled')          // 'vf-is-disabled' (默认为 true)
     * ns.is('active')            // 'vf-is-active'
     *
     * // 在模板中的常见用法
     * :class="[
     *   ns.b(),
     *   ns.is('disabled', disabled),
     *   ns.is('loading', loading)
     * ]"
     * ```
     */
    const is: {
        (name: string, state: boolean | undefined): string
        (name: string): string
    } = (name: string, ...args: [boolean | undefined] | []) => {
        // 如果没有传递 state 参数，默认为 true；否则使用传递的值
        // 这种写法避免了非空断言，更加类型安全
        const state = args.length === 0 ? true : args[0]
        return name && state ? `${statePrefix}${name}` : ''
    }

    // 返回所有的工具函数
    return {
        /** 当前使用的命名空间字符串 */
        namespace,
        /** Block - 块类名生成器 */
        b,
        /** Element - 元素类名生成器 */
        e,
        /** Modifier - 修饰符类名生成器 */
        m,
        /** Block + Element - 复合块元素类名生成器 */
        be,
        /** Element + Modifier - 元素修饰符类名生成器 */
        em,
        /** Block + Modifier - 块修饰符类名生成器 */
        bm,
        /** Block + Element + Modifier - 完整 BEM 类名生成器 */
        bem,
        /** State - 状态类名生成器 */
        is,
    }
}


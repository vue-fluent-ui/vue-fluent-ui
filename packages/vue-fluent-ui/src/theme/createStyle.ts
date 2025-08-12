import type {ThemeType} from "./theme.type.ts";
import {kebabCase} from 'lodash'

type Theme = ThemeType[keyof ThemeType];

/**
 * 根据主题对象创建 CSS 变量样式字符串。
 * @param {ThemeType} theme - 主题对象。
 * @returns {string} - 返回一个包含所有 CSS 变量的样式字符串，用于注入到 style 标签中。
 */
export const createStyle = (theme: ThemeType): string => {
    const cssRules: string[] = []
    for (const type in theme) {
        for (const name in theme[type as keyof ThemeType]) {
            cssRules.push(
                `--vf-${type}-${kebabCase(name)}: ${theme[type as keyof ThemeType][name as keyof Theme]}`
            )
        }
    }
    return `html {${cssRules.join(';\n')}`
}

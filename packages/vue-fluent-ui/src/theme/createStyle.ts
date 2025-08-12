import type {ThemeType} from "./theme.type.ts";
import {kebabCase} from 'lodash'

type Theme = ThemeType[keyof ThemeType];

export const createStyle = (theme: ThemeType): string => {
    const cssRules: string[] = []
    for (const type in theme) {
        for (const name in theme[type as keyof ThemeType]) {
            cssRules.push(
                `--Vf-${type}-${kebabCase(name)}: ${theme[type as keyof ThemeType][name as keyof Theme]}`
            )
        }
    }
    return `html {${cssRules.join(';\n')}`
}

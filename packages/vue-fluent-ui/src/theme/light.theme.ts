import type {ThemeType} from "./theme.type.ts";

/**
 * 获取默认的浅色主题。
 * @alpha temp为主题色相关内容
 * @returns {ThemeType} - 返回一个包含浅色主题所有颜色定义的完整主题对象。
 */
export const getDefaultLightTheme = (): ThemeType => {
    return {
        text: {
            primary: "#000000E4",
            secondary: "#0000009E",
            tertiary: "#00000072",
            disabled: "#0000005C",
            inverse: "#FFFFFF",
            accentPrimary: "#003e92", // temp
            accentSecondary: "#001a68", // temp
            accentTertiary: "#005fbb", // temp
            accentDisabled: "#0000005C",
            onAccentFillColorSelectedText: "#FFFFFF",
            onAccentFillColorPrimary: "#FFFFFF",
            onAccentFillColorSecondary: "#FFFFFFB3",
            onAccentFillColorDisabled: "#FFFFFF",
        },
        fill: {
            controlDefault: "#FFFFFFB3",
            controlSecondary: "#F9F9F980",
            controlTertiary: "#F9F9F94D",
            controlDisabled: "#F9F9F94D",
            controlTransparent: "#FFFFFF00",
            controlInputActive: "#FFFFFF",
            controlStrongDefault: "#00000072",
            controlStrongDisabled: "#00000051",
            controlSolidDefault: "#FFFFFF",
            subtleTransparent: "#FFFFFF00",
            subtleSecondary: "#00000009",
            subtleTertiary: "#00000006",
            subtleDisabled: "#FFFFFF00",
            controlAltTransparent: "#FFFFFF00",
            controlAltSecondary: "#00000006",
            controlAltTertiary: "#0000000F",
            controlAltQuarternary: "#00000018",
            controlAltDisabled: "#FFFFFF00",
            controlOnImageDefault: "#FFFFFFC9",
            controlOnImageSecondary: "#F3F3F3",
            controlOnImageTertiary: "#EBEBEB",
            controlOnImageDisabled: "#FFFFFF00",
            accentSelectedTextBackground: "#0078d4", // temp
            accentDefault: "#005fbb", // temp
            accentSecondary: "#005fbb", // temp
            accentTertiary: "#005ffbbcc", // temp
            accentDisabled: "#00000037",
            cardBackgroundDefault: "#FFFFFFB3",
            cardBackgroundSecondary: "#F6F6F680",
            smokeDefault: "#0000004D",
            layerDefault: "#FFFFFF80",
            layerAlt: "#FFFFFF",
            layerOnAcrylicDefault: "#FFFFFF40",
            layerOnAccentAcrylicDefault: "#FFFFFF40",
            layerOnMicaBaseAltDefault: "#FFFFFFB3",
            layerOnMicaBaseAltSecondary: "#0000000A",
            layerOnMicaBaseAltTertiary: "#F9F9F9",
            layerOnMicaBaseAltTransparent: "#00000000",
            solidBackgroundBase: "#F3F3F3",
            solidBackgroundSecondary: "#EEEEEE",
            solidBackgroundTertiary: "#F9F9F9",
            solidBackgroundQuarternary: "#FFFFFF",
            solidBackgroundBaseAlt: "#DADADA",
        },
        stroke: {
            controlDefault: "#0000000F",
            controlSecondary: "#00000029",
            controlOnAccentDefault: "#FFFFFF14",
            controlOnAccentSecondary: "#00000066",
            controlOnAccentTertiary: "#00000037",
            controlOnAccentDisabled: "#0000000F",
            controlForStrongFillWhenOnImage: "#FFFFFF59",
            cardDefault: "#0000000F",
            cardDefaultSolid: "#EBEBEB",
            controlStrongDefault: "#00000072",
            controlStrongDisabled: "#00000037",
            surfaceDefault: "#75757566",
            surfaceFlyout: "#0000000F",
            surfaceInverse: "#FFFFFF15",
            dividerDefault: "#0000000F",
            focusOuter: "#000000E4",
            focusInner: "#FFFFFF",
        },
        system: {
            attention: "#005EB6", //temp
            success: "#0F7B0F",
            caution: "#9D5D00",
            critical: "#C42B1C",
            neutral: "#00000072",
            solidNeutral: "#8A8A8A",
            attentionBackground: "#F6F6F680",
            successBackground: "#DFF6DD",
            cautionBackground: "#FFF4CE",
            criticalBackground: "#FDE7E9",
            neutralBackground: "#00000006",
            solidAttentionBackground: "#F7F7F7",
            solidNeutralBackground: "#F3F3F3",
        },
        border: {
            // todo 这里要改成支持namespace的形式
            // css不支持渐变边框，只能用这种奇怪的技巧解决
            controlElevation: "var(--vf-stroke-control-default) var(--vf-stroke-control-default)" +
                " var(--vf-stroke-control-secondary) var(--vf-stroke-control-default)",
            circleElevation: "var(--vf-stroke-control-default) var(--vf-stroke-control-default)" +
                " var(--vf-stroke-control-secondary) var(--vf-stroke-control-default)",
            accentControlElevation: "var(--vf-stroke-on-accent-default) var(--vf-stroke-on-accent-default)" +
                " var(--vf-stroke-on-accent-secondary) var(--vf-stroke-on-accent-default)",
        },
        radius: {
            overlayCorner: '8px',
            controlCorner: '4px',
        },
        // 暂时用不上
        highContrast: {
            systemColorWindowTextColor: "#1f1e33",
            systemColorWindowColor: "#1f1e33",
            systemColorButtonFaceColor: "#1f1e33",
            systemColorButtonTextColor: "#1f1e33",
            systemColorHighlightColor: "#1f1e33",
            systemColorHighlightTextColor: "#1f1e33",
            systemColorHotlightColor: "#1f1e33",
            systemColorGrayTextColor: "#1f1e33",
        },
    }
}
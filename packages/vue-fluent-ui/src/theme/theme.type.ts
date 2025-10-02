/**
 * @fileOverview 主题的类型定义
 */


/**
 * 表示主题画笔颜色的类型，格式为十六进制颜色字符串。
 * @example '#FFFFFF'
 */
export type ThemeBrushColor = `#${string}`;


/**
 * 定义了 Fluent UI 主题的完整结构，包含了文本、填充、描边、系统和高对比度等方面的颜色定义。
 */
export interface ThemeType {
    /**
     * 文本颜色定义
     */
    text: {
        primary: ThemeBrushColor
        secondary: ThemeBrushColor
        tertiary: ThemeBrushColor
        disabled: ThemeBrushColor
        inverse: ThemeBrushColor
        accentPrimary: ThemeBrushColor
        accentSecondary: ThemeBrushColor
        accentTertiary: ThemeBrushColor
        accentDisabled: ThemeBrushColor
        onAccentFillColorSelectedText: ThemeBrushColor
        onAccentFillColorPrimary: ThemeBrushColor
        onAccentFillColorSecondary: ThemeBrushColor
        onAccentFillColorDisabled: ThemeBrushColor
    },
    /**
     * 填充颜色定义
     */
    fill: {
        controlDefault: ThemeBrushColor
        controlSecondary: ThemeBrushColor
        controlTertiary: ThemeBrushColor
        controlDisabled: ThemeBrushColor
        controlTransparent: ThemeBrushColor
        controlInputActive: ThemeBrushColor
        controlStrongDefault: ThemeBrushColor
        controlStrongDisabled: ThemeBrushColor
        controlSolidDefault: ThemeBrushColor
        subtleTransparent: ThemeBrushColor
        subtleSecondary: ThemeBrushColor
        subtleTertiary: ThemeBrushColor
        subtleDisabled: ThemeBrushColor
        controlAltTransparent: ThemeBrushColor
        controlAltSecondary: ThemeBrushColor
        controlAltTertiary: ThemeBrushColor
        controlAltQuarternary: ThemeBrushColor
        controlAltDisabled: ThemeBrushColor
        controlOnImageDefault: ThemeBrushColor
        controlOnImageSecondary: ThemeBrushColor
        controlOnImageTertiary: ThemeBrushColor
        controlOnImageDisabled: ThemeBrushColor
        accentSelectedTextBackground: ThemeBrushColor
        accentDefault: ThemeBrushColor
        accentSecondary: ThemeBrushColor
        accentTertiary: ThemeBrushColor
        accentDisabled: ThemeBrushColor
        cardBackgroundDefault: ThemeBrushColor
        cardBackgroundSecondary: ThemeBrushColor
        smokeDefault: ThemeBrushColor
        layerDefault: ThemeBrushColor
        layerAlt: ThemeBrushColor
        layerOnAcrylicDefault: ThemeBrushColor
        layerOnAccentAcrylicDefault: ThemeBrushColor
        layerOnMicaBaseAltDefault: ThemeBrushColor
        layerOnMicaBaseAltSecondary: ThemeBrushColor
        layerOnMicaBaseAltTertiary: ThemeBrushColor
        layerOnMicaBaseAltTransparent: ThemeBrushColor
        solidBackgroundBase: ThemeBrushColor
        solidBackgroundSecondary: ThemeBrushColor
        solidBackgroundTertiary: ThemeBrushColor
        solidBackgroundQuarternary: ThemeBrushColor
        solidBackgroundBaseAlt: ThemeBrushColor
    }
    /**
     * 描边颜色定义
     */
    stroke: {
        controlDefault: ThemeBrushColor
        controlSecondary: ThemeBrushColor
        controlOnAccentDefault: ThemeBrushColor
        controlOnAccentSecondary: ThemeBrushColor
        controlOnAccentTertiary: ThemeBrushColor
        controlOnAccentDisabled: ThemeBrushColor
        controlForStrongFillWhenOnImage: ThemeBrushColor
        cardDefault: ThemeBrushColor
        cardDefaultSolid: ThemeBrushColor
        controlStrongDefault: ThemeBrushColor
        controlStrongDisabled: ThemeBrushColor
        surfaceDefault: ThemeBrushColor
        surfaceFlyout: ThemeBrushColor
        surfaceInverse: ThemeBrushColor
        dividerDefault: ThemeBrushColor
        focusOuter: ThemeBrushColor
        focusInner: ThemeBrushColor
    }
    /**
     * 系统级颜色定义，如警告、成功、危险等状态颜色。
     */
    system: {
        attention: ThemeBrushColor
        success: ThemeBrushColor
        caution: ThemeBrushColor
        critical: ThemeBrushColor
        neutral: ThemeBrushColor
        solidNeutral: ThemeBrushColor
        attentionBackground: ThemeBrushColor
        successBackground: ThemeBrushColor
        cautionBackground: ThemeBrushColor
        criticalBackground: ThemeBrushColor
        neutralBackground: ThemeBrushColor
        solidAttentionBackground: ThemeBrushColor
        solidNeutralBackground: ThemeBrushColor
    },
    border: {
        // 这些token不支持border的速记形式，请显式使用border-color
        controlElevation: string,
        circleElevation: string,
        accentControlElevation: string,
    },
    radius: {
        overlayCorner: string,
        controlCorner: string,
        circular: string
    },
    duration: {
        controlNormalAnimation: string;
        controlFastAnimation: string;
        controlFastAnimationAfter: string;
        controlFasterAnimation: string;
    },
    /**
     * 高对比度模式下的颜色定义。
     */
    highContrast: {
        systemColorWindowTextColor: ThemeBrushColor
        systemColorWindowColor: ThemeBrushColor
        systemColorButtonFaceColor: ThemeBrushColor
        systemColorButtonTextColor: ThemeBrushColor
        systemColorHighlightColor: ThemeBrushColor
        systemColorHighlightTextColor: ThemeBrushColor
        systemColorHotlightColor: ThemeBrushColor
        systemColorGrayTextColor: ThemeBrushColor
    }
}
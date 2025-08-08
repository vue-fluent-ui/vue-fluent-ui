/**
 * @fileOverview 主题的类型定义
 */


export type ThemeBrushColor = `#${string}`;


export interface ThemeType {
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
    highContrast: {
        systemColorWindowTextColor: ThemeBrushColor
        systemColorWindowColor: ThemeBrushColor
        systemColorButtonFaceColor: ThemeBrushColor
        systemColorButtonTextColor: ThemeBrushColor
        systemColorHighlightColor: ThemeBrushColor
        systemColorHighlightTextColor: ThemeBrushColor
        systemColorHotlightColor: ThemeBrushColor
        systemColorGrayTextColor: ThemeBrushColor
        ControlElevationBorder: ThemeBrushColor
        CircleElevationBorder: ThemeBrushColor
        AccentControlElevationBorder: ThemeBrushColor
    }
}
/**
 * @fileOverview 主题的类型定义
 */


export interface ThemeType {
    text: {
        primary: string
        secondary: string
        tertiary: string
        disabled: string
        inverse: string
        accentPrimary: string
        accentSecondary: string
        accentTertiary: string
        accentDisabled: string
        onAccentFillColorSelectedText: string
        onAccentFillColorPrimary: string
        onAccentFillColorSecondary: string
        onAccentFillColorDisabled: string
    },
    fill: {
        controlDefault: string
        controlSecondary: string
        controlTertiary: string
        controlDisabled: string
        controlTransparent: string
        controlInputActive: string
        controlStrongDefault: string
        controlStrongDisabled: string
        controlSolidDefault: string
        subtleTransparent: string
        subtleSecondary: string
        subtleTertiary: string
        subtleDisabled: string
        controlAltTransparent: string
        controlAltSecondary: string
        controlAltTertiary: string
        controlAltQuarternary: string
        controlAltDisabled: string
        controlOnImageDefault: string
        controlOnImageSecondary: string
        controlOnImageTertiary: string
        controlOnImageDisabled: string
        accentSelectedTextBackground: string
        accentDefault: string
        accentSecondary: string
        accentTertiary: string
        accentDisabled: string
        cardBackgroundDefault: string
        cardBackgroundSecondary: string
        smokeDefault: string
        layerDefault: string
        layerAlt: string
        layerOnAcrylicDefault: string
        layerOnAccentAcrylicDefault: string
        layerOnMicaBaseAltDefault: string
        layerOnMicaBaseAltSecondary: string
        layerOnMicaBaseAltTertiary: string
        layerOnMicaBaseAltTransparent: string
        solidBackgroundBase: string
        solidBackgroundSecondary: string
        solidBackgroundTertiary: string
        solidBackgroundQuarternary: string
        solidBackgroundBaseAlt: string
    }
    stroke: {
        controlDefault: string
        controlSecondary: string
        controlOnAccentDefault: string
        controlOnAccentSecondary: string
        controlOnAccentTertiary: string
        controlOnAccentDisabled: string
        controlForStrongFillWhenOnImage: string
        cardDefault: string
        cardDefaultSolid: string
        controlStrongDefault: string
        controlStrongDisabled: string
        surfaceDefault: string
        surfaceFlyout: string
        surfaceInverse: string
        dividerDefault: string
        focusOuter: string
        focusInner: string
    }
    system: {
        attention: string
        success: string
        caution: string
        critical: string
        neutral: string
        solidNeutral: string
        attentionBackground: string
        successBackground: string
        cautionBackground: string
        criticalBackground: string
        neutralBackground: string
        solidAttentionBackground: string
        solidNeutralBackground: string
    },
    highContrast: {
        systemColorWindowTextColor: string
        systemColorWindowColor: string
        systemColorButtonFaceColor: string
        systemColorButtonTextColor: string
        systemColorHighlightColor: string
        systemColorHighlightTextColor: string
        systemColorHotlightColor: string
        systemColorGrayTextColor: string
        ControlElevationBorder: string
        CircleElevationBorder: string
        AccentControlElevationBorder: string
    }
}
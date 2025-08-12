import type { ThemeConfig } from 'antd';
import { theme } from 'antd';
const { defaultAlgorithm, darkAlgorithm } = theme;

/**
 * Call makeTheme(isDark) and pass the result to ConfigProvider theme prop:
 * <ConfigProvider theme={makeTheme(isDark)}>...</ConfigProvider>
 */
// theme.ts (only the dark token block changed)
export const makeTheme = (isDark: boolean): ThemeConfig => ({
  algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
  token: isDark
    ? {
        colorPrimary: '#3b82f6',
        colorLink: '#3b82f6',

        // 🔧 Raise contrast for all body text variants
        colorTextBase: '#e8eaee',                 // base text
        colorText: '#e8eaee',
        colorTextSecondary: 'rgba(232, 234, 238, 0.88)',
        colorTextTertiary:  'rgba(232, 234, 238, 0.78)',
        colorTextQuaternary:'rgba(232, 234, 238, 0.62)',
        colorTextDescription:'rgba(232, 234, 238, 0.82)',

        colorBorder: '#273244',
        colorBgLayout: '#0b111b',
        colorBgContainer: '#141b26',
        colorFillSecondary: 'rgba(255, 255, 255, 0.06)',
        borderRadius: 12,
        fontSize: 16,
      }
    : {
        colorPrimary: '#2563eb',
        colorLink: '#2563eb',
        colorBgLayout: '#f6f7fb',
        borderRadius: 12,
        fontSize: 16,
      },
  components: {
    Button: { controlHeight: 44, borderRadius: 999, fontWeight: 600 },
    Card:   { borderRadiusLG: 16 },
    Layout: { headerBg: 'transparent' },
    Typography: { colorTextHeading: isDark ? '#f3f4f6' : undefined },
  },
});

const themes = require("daisyui/src/theming/themes");

export type DaisyTheme = {
  accent: string;
  "base-100": string;
  "base-200": string;
  "base-300": string;
  "base-content": string;
  "color-scheme": string;
  error: string;
  info: string;
  neutral: string;
  "neutral-content": string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
};

export const dimTheme = themes["dim"] as DaisyTheme;

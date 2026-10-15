"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  section {
    padding-top: 160px;
  }

  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    color: #171717;
    background: #ffffff;
    font-family: "Pretendard Variable", Pretendard, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  :root {
    --font-size-xs: 12px;
    --font-size-sm: 13px;
    --font-size-base: 14px;
    --font-size-md: 15px;

    --color-primary-10: #f5faff;
    --color-primary-20: #f4ebff
    --color-primary-30: #e9d7fe;
    --color-primary-40: #c9a8fa;
    --color-primary-50: #9e77ed;
    --color-primary-60: #7a4ed0;
    --color-primary-70: #5b3fab;
    --color-primary-80: #42307d;
    --color-primary: var(--color-primary-50);
    --color-primary-hover: var(--color-primary-60);
    --color-primary-active: var(--color-primary-70);
    --color-white: #ffffff;
    --color-black: #0a0d12;
    --color-gray-10: #e9eaeb;
    --color-gray-20: #d5d7da;
    --color-gray-30: #a4a7ae;
    --color-gray-40: #717680;
    --color-gray-50: #535862;
    --color-gray-60: #414651;
    --color-gray-70: #252b37;
    --color-gray-80: #181d27;
    --color-success-10: #effaff;
    --color-success-20: #d1e0ff;
    --color-success-30: #b2ccff;
    --color-success-40: #84adff;
    --color-success-50: #2970ff;
    --color-success-60: #155eef;
    --color-success-70: #0040c1;
    --color-success-80: #002266;
    --color-success: var(--color-success-50);
    --color-error-10: #fff0f0;
    --color-error-20: #ffe4e2;
    --color-error-30: #fecdc9;
    --color-error-40: #f97066;
    --color-error-50: #f04438;
    --color-error-60: #c53030;
    --color-error-70: #912018;
    --color-error-80: #7a271a;
    --color-error: var(--color-error-50);
    --color-warning-10: #fffcf5;
    --color-warning-20: #fff0c7;
    --color-warning-30: #fedf89;
    --color-warning-40: #fdb022;
    --color-warning-50: #f79009;
    --color-warning-60: #c05600;
    --color-warning-70: #93370d;
    --color-warning-80: #7a2e0e;
    --color-warning: var(--color-warning-50);
    --color-progress-10: #f6fef9;
    --color-progress-20: #d1fadf;
    --color-progress-30: #a6f4c5;
    --color-progress-40: #32d583;
    --color-progress-50: #12b76a;
    --color-progress-60: #0fbf55;
    --color-progress-70: #05603a;
    --color-progress-80: #054f31;
    --color-progress: var(--color-progress-50);
    --color-text-primary: var(--color-gray-60);
    --color-text-secondary: var(--color-gray-40);
    --color-text-inverse: var(--color-white);
    --color-bg-10: #FDFDFD;
    --color-bg-20: #FAFAFA;
    --color-bg-30: #F5F5F5;
    --color-border-default: var(--color-gray-20);
    --radius-xs: 4px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --shadow-sm: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default GlobalStyles;

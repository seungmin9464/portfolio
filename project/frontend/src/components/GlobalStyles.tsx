'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-paper: #f5f4f0;
  --color-ink: #191916;
  --color-orange: #ef6f2e;
  --color-muted: #66665f;
  --color-line: #cecec5;
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-mono: 'Courier New', monospace;
  --gutter: clamp(24px, 4.4vw, 80px);
  --header-height: 50px;
  color-scheme: light;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--header-height);
}
body {
  background: var(--color-paper);
  color: var(--color-ink);
  font-family: 'Pretendard Variable', Pretendard, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
textarea {
  font: inherit;
}
button {
  cursor: pointer;
  color: inherit;
  background: none;
  border: 0;
}
button:disabled {
  cursor: default;
  opacity: 0.3;
}
a,
button {
  -webkit-tap-highlight-color: transparent;
}
a:focus-visible,
button:focus-visible,
summary:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--color-orange);
  outline-offset: 5px;
}
::selection {
  background: var(--color-orange);
  color: var(--color-paper);
}
img,
svg {
  max-width: 100%;
}
button svg,
a svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
.serif {
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: -0.065em;
  line-height: 1.2;
}
.mono {
  font-family: var(--font-mono);
  font-size: 14px;
  text-transform: uppercase;
  line-height: 1.2;
}
.condensed {
  font-family: Impact, 'Arial Narrow', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: -0.035em;
  line-height: 1.2;
}
.page-shell {
  max-width: 1800px;
  margin: auto;
  padding: 0 var(--gutter);
}
.site-header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: var(--color-paper);
  z-index: 30;
  border-bottom: 1px solid transparent;
}
.wordmark {
  font-family: var(--font-serif);
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1.8px;
}
.wordmark span {
  color: var(--color-orange);
}
.main-nav {
  display: flex;
  gap: 38px;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 14px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.main-nav a {
  padding: 12px 0;
}
.main-nav a:hover,
.main-nav a[aria-current] {
  color: var(--color-orange);
}
.main-nav .resume-link {
  margin-left: 30px;
}
.menu-toggle {
  display: none;
}
.mobile-break {
  display: none;
}
.skip-link {
  position: fixed;
  top: -100px;
  left: 20px;
  background: var(--color-ink);
  color: white;
  padding: 14px;
  z-index: 100;
}
.skip-link:focus {
  top: 10px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.section-space {
  padding-top: 110px;
  scroll-margin-top: 12px;
}
.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 25px;
  margin-bottom: 28px;
}
.eyebrow {
  margin-bottom: 13px;
}
.section-heading .condensed {
  font-size: clamp(60px, 8.2vw, 140px);
}
.section-aside {
  margin-bottom: 6px;
}
.work-toolbar {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  align-items: center;
  margin-bottom: 20px;
}
.filters {
  display: flex;
  gap: 5px;
}
.filters button {
  border: 1px solid var(--color-line);
  border-radius: 20px;
  font: 14px var(--font-mono);
  padding: 8px 14px;
  min-height: 34px;
}
.filters button[aria-pressed='true'] {
  background: var(--color-ink);
  color: var(--color-paper);
  border-color: var(--color-ink);
}
.project-info {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 15px;
}
.project-info h3 {
  font-family: Impact, 'Arial Narrow', sans-serif;
  text-transform: uppercase;
  font-size: 23px;
  font-weight: 400;
}
.project-info p {
  font-size: 15px;
  color: var(--color-muted);
  margin-top: 5px;
  line-height: 1.2;
}
.project-info > .mono {
  font-size: 12px;
  color: var(--color-muted);
  max-width: 40%;
  text-align: right;
}
.about-section {
  margin-top: 90px;
  border-top: 1px solid var(--color-line);
  padding-top: 40px;
}
.about-section > div {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 10%;
}
.about-section h2 {
  font-size: clamp(45px, 5.5vw, 90px);
}
.about-copy p {
  font-size: 16px;
  line-height: 1.2;
  max-width: 440px;
}
.about-copy p + p {
  margin-top: 12px;
  color: var(--color-muted);
}
.text-link {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-orange);
  margin-top: 15px;
}
.text-link svg {
  width: 16px;
}
.notes-section .section-heading h2 {
  font-size: clamp(55px, 8.6vw, 145px);
}
.site-footer {
  padding-top: 85px;
}
.contact-heading {
  display: flex;
  align-items: end;
  gap: 30px;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 2px solid var(--color-orange);
}
.contact-heading h2 {
  font-size: clamp(45px, 6.4vw, 110px);
}
.contact-links {
  display: flex;
  gap: 23px;
  flex-wrap: wrap;
  padding-bottom: 5px;
  flex-shrink: 0;
}
.contact-links a:hover {
  color: var(--color-orange);
}
.unconfigured {
  color: var(--color-muted);
  font-size: 13px;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 23px 0 30px;
  font-size: 12px;
  color: var(--color-muted);
}
.footer-bottom button {
  font: inherit;
  text-transform: uppercase;
  letter-spacing: inherit;
}
.dialog-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}
.dialog-heading button {
  width: 40px;
  height: 40px;
}
.dialog-heading svg {
  width: 24px;
  height: 24px;
}
.dialog-description {
  font-size: 16px;
  line-height: 1.2;
  margin: 25px 0;
}
@media (max-width: 1100px) {
  .contact-heading {
    align-items: start;
    flex-direction: column;
    gap: 20px;
  }
}
@media (max-width: 760px) {
  :root {
    --header-height: 50px;
    --gutter: 24px;
  }
  .site-header {
    align-items: center;
  }
  .wordmark {
    font-size: 29px;
  }
  .menu-toggle {
    display: flex;
    align-items: center;
    gap: 16px;
    min-height: 44px;
    font-size: 14px;
  }
  .menu-toggle > span {
    font: 26px Arial;
  }
  .main-nav {
    display: none;
    position: absolute;
    left: calc(-1 * var(--gutter));
    right: calc(-1 * var(--gutter));
    top: var(--header-height);
    padding: 25px var(--gutter);
    background: var(--color-paper);
    border-bottom: 1px solid var(--color-line);
    gap: 0;
    box-shadow: 0 20px 20px #19191608;
  }
  .main-nav.is-open {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .main-nav a {
    padding: 17px 0;
    border-bottom: 1px solid var(--color-line);
    font-size: 16px;
  }
  .main-nav .resume-link {
    margin: 0;
    border: 0;
  }
  .mobile-break {
    display: block;
  }
  .section-space {
    padding-top: 75px;
  }
  .section-heading {
    align-items: start;
    margin-bottom: 22px;
  }
  .section-heading .condensed {
    font-size: clamp(70px, 17vw, 110px);
    max-width: 90%;
    line-height: 1.2;
  }
  .section-aside {
    display: none;
  }
  .eyebrow {
    font-size: 12px;
  }
  .work-toolbar {
    gap: 12px;
    margin-bottom: 20px;
  }
  .filters button {
    min-height: 38px;
    font-size: 13px;
    padding: 9px 15px;
  }
  .project-info > .mono {
    text-align: left;
    max-width: 100%;
    font-size: 12px;
  }
  .project-info p {
    font-size: 15px;
  }
  .about-section {
    margin-top: 60px;
    padding-top: 30px;
  }
  .about-section > div {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  .about-section h2 {
    font-size: clamp(42px, 10vw, 70px);
  }
  .about-copy p {
    font-size: 16px;
    line-height: 1.2;
  }
  .notes-section .section-heading h2 {
    font-size: clamp(62px, 17.5vw, 110px);
    line-height: 1.2;
    letter-spacing: -0.065em;
  }
  .site-footer {
    padding-top: 65px;
  }
  .contact-heading {
    gap: 25px;
    padding-bottom: 22px;
  }
  .contact-heading h2 {
    font-size: clamp(53px, 14vw, 85px);
    line-height: 1.2;
  }
  .contact-links {
    gap: 16px;
    font-size: 13px;
    align-items: center;
  }
  .contact-links a {
    min-height: 40px;
    display: flex;
    align-items: center;
  }
  .footer-bottom {
    flex-wrap: wrap;
    font-size: 11px;
    padding-bottom: 25px;
    gap: 14px;
  }
  .footer-bottom > span:nth-child(2) {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
.page-shell {
  position: relative;
}
.scroll-thread {
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  overflow: visible;
  pointer-events: none;
  z-index: 3;
  color: var(--color-orange);
}
.scroll-thread path,
.scroll-thread circle {
  vector-effect: non-scaling-stroke;
}
.scroll-thread circle {
  filter: drop-shadow(0 0 3px #ef6f2e55);
}
.work-section {
  padding-bottom: 25px;
}
.archive-count {
  font-size: 13px;
  color: var(--color-muted);
}
.archive-image {
  aspect-ratio: 1.45;
  background: #ecebe5;
  overflow: hidden;
}
.archive-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}
.archive-card:hover img {
  transform: scale(1.025);
}
.archive-empty {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  border-top: 1px solid var(--color-line);
  border-bottom: 1px solid var(--color-line);
  padding: 65px 25px;
}
.archive-empty > div {
  flex: 1;
}
.archive-empty h3 {
  font: 400 clamp(26px, 3vw, 45px) / 1.2 var(--font-serif);
  letter-spacing: -0.05em;
}
.archive-empty p {
  font-size: 16px;
  color: var(--color-muted);
  line-height: 1.2;
  margin-top: 17px;
}
.archive-empty > .mono {
  font-size: 12px;
  color: var(--color-muted);
  align-self: end;
}
.notes-empty {
  border-block: 1px solid var(--color-line);
  padding: 35px 0;
  display: grid;
  grid-template-columns: 25% 1fr auto;
  gap: 20px;
  align-items: center;
}
.notes-empty > .mono {
  color: var(--color-muted);
  font-size: 13px;
}
.notes-empty p {
  font-size: 16px;
  line-height: 1.2;
  color: var(--color-muted);
}
.notes-period {
  font: 35px var(--font-serif);
  color: var(--color-orange);
}
.site-footer {
  padding-top: 100px;
}
.contact-heading {
  border: 0;
  padding-bottom: 30px;
}
.footer-dot {
  color: var(--color-orange);
  display: inline-block;
}
.footer-bottom {
  border-top: 1px solid var(--color-line);
  padding-block: 30px;
}
.intro-loader {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 100;
  background: var(--color-paper);
  pointer-events: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
}
.intro-loader[data-phase='loading'],
.intro-loader[data-phase='opening'] {
  display: flex;
}
.intro-signature {
  position: relative;
  width: 260px;
  height: 180px;
  text-align: center;
}
.intro-signature > span {
  font-family: var(--font-serif);
  font-weight: 700;
  font-size: 145px;
  letter-spacing: -10px;
  line-height: 1.2;
}
.intro-dot {
  color: var(--color-orange);
}
.intro-signature svg {
  position: absolute;
  inset: 100px 0 auto;
  width: 260px;
  height: 90px;
  overflow: visible;
}
.intro-signature path {
  stroke: var(--color-orange);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: intro-thread 1s ease forwards;
}
.intro-label {
  color: var(--color-muted);
  font-size: 13px;
}
.intro-loader[data-phase='opening'] {
  animation: intro-reveal 0.75s cubic-bezier(0.76, 0, 0.24, 1) both;
}
.intro-loader[data-phase='loading'] {
  animation: intro-safety 0.1s 3.8s forwards;
}
@keyframes intro-thread {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes intro-reveal {
  0% {
    clip-path: inset(0);
  }
  100% {
    clip-path: inset(0 0 100% 0);
    visibility: hidden;
  }
}
@keyframes intro-safety {
  to {
    visibility: hidden;
  }
}
@media (max-width: 760px) {
  .section-space {
    padding-top: 95px;
  }
  .archive-empty {
    padding: 35px 0;
    gap: 20px;
    flex-wrap: wrap;
  }
  .archive-empty h3 {
    font-size: 26px;
  }
  .archive-empty p {
    font-size: 15px;
  }
  .archive-empty > .mono {
    width: 100%;
    text-align: right;
  }
  .notes-empty {
    grid-template-columns: 1fr auto;
    padding: 28px 0;
    gap: 14px;
  }
  .notes-empty > .mono {
    grid-column: 1;
  }
  .notes-empty p {
    grid-column: 1;
    font-size: 16px;
  }
  .notes-period {
    grid-column: 2;
    grid-row: 1 / 3;
  }
  .site-footer {
    padding-top: 85px;
  }
  .contact-heading {
    padding-bottom: 30px;
  }
  .contact-links {
    row-gap: 3px;
  }
  .footer-bottom {
    font-size: 11px;
  }
  .about-section {
    margin-top: 70px;
    padding-top: 45px;
  }
  .intro-signature {
    transform: scale(0.85);
  }
  .intro-label {
    font-size: 12px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .intro-loader {
    display: none !important;
  }
  .scroll-thread {
    opacity: 0.3;
  }
  .scroll-thread circle {
    display: none;
  }
  .archive-card:hover img {
    transform: none;
  }
}
:root {
  --font-korean:
    'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
    'Segoe UI', sans-serif;
  --font-serif:
    Georgia, 'Times New Roman', 'Pretendard Variable', Pretendard, serif;
  --font-mono: 'Courier New', 'Pretendard Variable', Pretendard, monospace;
}
body {
  font-family: var(--font-korean);
  font-size: 18px;
  line-height: 1.2;
  word-break: keep-all;
  overflow-wrap: break-word;
}
.serif,
.condensed {
  overflow-wrap: normal;
  word-break: normal;
}
.mono {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 400;
}
.section-heading .condensed {
  font-size: clamp(66px, 7.4vw, 120px);
}
.eyebrow {
  font-size: 14px;
  color: var(--color-muted);
  letter-spacing: 0.12em;
}
.archive-intro {
  max-width: 760px;
  margin: 42px 0 55px;
  font-family: var(--font-korean);
}
.archive-kicker {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #b44f20;
  margin-bottom: 14px;
}
.archive-statement {
  font-size: clamp(24px, 2.2vw, 35px);
  line-height: 1.2;
  letter-spacing: -0.045em;
  font-weight: 400;
}
.archive-statement strong {
  font-weight: 750;
  color: var(--color-ink);
}
.archive-description {
  font-size: 17px;
  line-height: 1.2;
  color: var(--color-muted);
  margin-top: 22px;
  letter-spacing: -0.015em;
}
.archive-count {
  font-size: 14px;
}
.archive-empty h3 {
  font-size: clamp(32px, 3.4vw, 52px);
  line-height: 1.2;
}
.archive-empty p {
  font-family: var(--font-korean);
  font-size: 17px;
  line-height: 1.2;
}
.about-copy p {
  font-family: var(--font-korean);
  font-size: 18px;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.about-copy p:first-child {
  font-size: 21px;
  font-weight: 600;
  color: var(--color-ink);
}
.about-section h2 {
  font-size: clamp(42px, 4.8vw, 76px);
}
.notes-section .section-heading h2 {
  font-size: clamp(55px, 7.6vw, 120px);
}
.notes-empty p {
  font-family: var(--font-korean);
  font-size: 17px;
  line-height: 1.2;
}
.notes-empty > .mono {
  font-size: 14px;
}
.scroll-thread {
  overflow: hidden;
}
.idea-sketch {
  margin: 70px auto 15px;
  padding: 24px 6%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  align-items: center;
  position: relative;
}
.idea-intro .eyebrow {
  font-size: 13px;
  max-width: 260px;
}
.idea-intro h4 {
  font-size: clamp(42px, 5.2vw, 78px);
  line-height: 1.2;
  letter-spacing: -0.055em;
  margin-top: 20px;
}
.idea-intro h4 span {
  color: var(--color-orange);
}
.idea-copy {
  font-family: var(--font-korean);
  font-size: 18px;
  line-height: 1.2;
  color: var(--color-muted);
  margin-top: 28px;
  letter-spacing: -0.025em;
}
.idea-bulb {
  width: 100%;
  max-width: 460px;
  height: auto;
  justify-self: center;
  color: var(--color-orange);
  overflow: hidden;
}
.bulb-label {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  fill: var(--color-ink);
}
.idea-sketch figcaption {
  grid-column: 1 / -1;
  text-align: right;
  font-size: 12px;
  color: var(--color-muted);
  margin-top: -8px;
}
.site-footer {
  padding-top: 65px;
}
.contact-heading {
  padding-bottom: 25px;
}
.contact-heading h2 {
  font-size: clamp(45px, 6vw, 96px);
}
.contact-links {
  font-family: var(--font-mono);
}
.unconfigured {
  font-family: var(--font-korean);
  font-size: 15px;
}
.footer-bottom {
  padding: 22px 0 max(20px, env(safe-area-inset-bottom));
  font-size: 13px;
}
@media (max-width: 760px) {
  body {
    font-size: 17px;
  }
  .section-space {
    padding-top: 65px;
  }
  .section-heading .condensed {
    font-size: clamp(60px, 16vw, 96px);
  }
  .section-heading {
    margin-bottom: 23px;
  }
  .archive-intro {
    margin: 28px 0 35px;
  }
  .archive-kicker {
    font-size: 15px;
    margin-bottom: 12px;
  }
  .archive-statement {
    font-size: clamp(22px, 5.8vw, 28px);
    line-height: 1.2;
    letter-spacing: -0.04em;
  }
  .desktop-break {
    display: none;
  }
  .archive-description {
    font-size: 16px;
    line-height: 1.2;
    margin-top: 16px;
  }
  .eyebrow {
    font-size: 13px;
  }
  .work-toolbar {
    gap: 12px;
  }
  .archive-count {
    font-size: 13px;
  }
  .archive-empty {
    padding: 30px 0;
    gap: 18px;
  }
  .archive-empty h3 {
    font-size: 30px;
    letter-spacing: -0.045em;
  }
  .archive-empty p {
    font-size: 16px;
    line-height: 1.2;
  }
  .archive-empty > .mono {
    font-size: 13px;
  }
  .idea-sketch {
    grid-template-columns: 1fr;
    margin: 40px auto 0;
    padding: 0;
    gap: 20px;
  }
  .idea-intro h4 {
    font-size: 45px;
    line-height: 1.2;
    margin-top: 12px;
  }
  .idea-intro h4 br {
    display: none;
  }
  .idea-intro .eyebrow {
    font-size: 12px;
    max-width: none;
  }
  .idea-copy {
    font-size: 16px;
    line-height: 1.2;
    margin-top: 16px;
  }
  .idea-bulb {
    max-width: 370px;
  }
  .idea-sketch figcaption {
    font-size: 12px;
    text-align: left;
    margin-top: -15px;
  }
  .about-section {
    margin-top: 45px;
    padding-top: 30px;
  }
  .about-section h2 {
    font-size: clamp(38px, 10vw, 60px);
  }
  .about-copy p {
    font-size: 17px;
    line-height: 1.2;
  }
  .about-copy p:first-child {
    font-size: 19px;
    font-weight: 650;
  }
  .notes-section .section-heading h2 {
    font-size: clamp(52px, 15vw, 85px);
    line-height: 1.2;
  }
  .notes-empty {
    padding: 24px 0;
  }
  .notes-empty p {
    font-size: 16px;
    line-height: 1.2;
  }
  .notes-empty > .mono {
    font-size: 13px;
  }
  .site-footer {
    padding-top: 42px;
  }
  .contact-heading {
    gap: 20px;
    padding-bottom: 20px;
  }
  .contact-heading h2 {
    font-size: clamp(44px, 12.4vw, 70px);
  }
  .contact-links {
    gap: 14px;
    row-gap: 0;
  }
  .contact-links a {
    min-height: 36px;
    font-size: 14px;
  }
  .unconfigured {
    font-size: 14px;
  }
  .footer-bottom {
    padding-top: 18px;
    padding-bottom: max(18px, env(safe-area-inset-bottom));
    font-size: 12px;
    line-height: 1.2;
  }
}
@media (prefers-reduced-motion: reduce) {
  .idea-bulb circle {
    display: none;
  }
}

.hero-monogram {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-paper);
}
.monogram-field {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  touch-action: pan-y;
}
.monogram-field canvas {
  display: block;
  width: 100%;
  height: 100%;
}
.monogram-field:focus-visible {
  outline-offset: -8px;
}
.monogram-hint {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  color: var(--color-muted);
  font-size: 12px;
}
.monogram-hint {
  right: 24px;
  bottom: 18px;
}
.monogram-fallback {
  position: absolute;
  inset: 0;
  display: grid;
  grid-auto-flow: column;
  align-content: center;
  justify-content: center;
  font-size: clamp(80px, 45cqh, 240px);
  font-weight: 700;
}
.monogram-fallback > span {
  color: var(--color-orange);
}
.monogram-field[data-ready='true'] .monogram-fallback {
  display: none;
}
@media (max-width: 760px) {
  .monogram-hint {
    font-size: 11px;
  }
  .monogram-hint {
    bottom: 12px;
    right: 16px;
  }
}
@media (hover: none) {
  .monogram-pointer-hint {
    display: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .monogram-hint {
    display: none;
  }
}


.quiet-poster {
  min-height: calc(100svh - var(--header-height));
  display: flex;
  flex-direction: column;
}
.poster-meta {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 24px;
  font-size: 12px;
  color: var(--color-muted);
}
.poster-motion {
  height: clamp(400px, 56svh, 700px);
  flex: 1 0 auto;
  min-height: 400px;
  container-type: size;
}
.poster-copy {
  display: grid;
  gap: 28px;
  padding: 0;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.poster-copy h1 {
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.025em;
  padding-bottom: 0;
}
.poster-copy h1 > span {
  color: var(--color-orange);
}
.poster-copy p {
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.025em;
  padding-bottom: 0;
  text-align: center;
}
.poster-explore {
  display: inline-flex;
  align-items: center;
  justify-self: end;
  gap: 22px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-ink);
  font-size: 13px;
}
.poster-explore svg,
.poster-archive svg {
  width: 15px;
  height: 15px;
}
.poster-explore:hover,
.poster-archive:hover {
  color: var(--color-orange);
}
.poster-archive {
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-top: 1px solid var(--color-line);
  font-size: 15px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}
.poster-archive .mono {
  font-size: 12px;
}
.poster-archive > span:last-child {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}
@media (max-width: 760px) {
  .quiet-poster {
    min-height: 0;
  }
  .poster-meta {
    font-size: 11px;
  }
  .poster-meta > span:last-child {
    display: none;
  }
  .poster-motion {
    height: clamp(300px, 43svh, 440px);
    min-height: 300px;
    margin: 8px 0;
    flex: none;
  }
  .poster-copy {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 0;
    align-items: center;
    text-align: center;
  }
  .poster-copy h1 {
    font-size: 17px;
    letter-spacing: -0.025em;
    padding-bottom: 0;
  }
  .poster-copy p {
    font-size: 17px;
    letter-spacing: -0.025em;
    padding-bottom: 0;
    text-align: center;
  }
  .poster-explore {
    grid-column: auto;
    font-size: 13px;
    justify-self: center;
  }
  .poster-archive {
    flex-wrap: wrap;
    align-items: start;
    row-gap: 10px;
    padding: 22px 0;
    font-size: 15px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    text-align: center;
  }
  .poster-archive > span:first-child {
    width: 100%;
  }
  .poster-archive > span:last-child {
    font-size: 11px;
  }
  .poster-motion .monogram-hint {
    right: 0;
    bottom: 0;
  }
}
.poster-archive > span:nth-child(2) { text-align: center; }
.poster-archive > span:last-child { justify-self: end; }
@media (max-width: 760px) {
  .poster-archive > span:last-child { justify-self: center; }
}
.work-section {
  scroll-margin-top: 0;
}




.archive-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 24px;
}
.archive-card {
  position: relative;
  padding: 10px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
}
.project-tags {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  display: flex;
  gap: 5px;
  pointer-events: none;
}
.project-status {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid #d0d0cc;
  border-radius: 999px;
  background: #e6e6e2;
  color: #454541;
  font-family: var(--font-korean);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
  pointer-events: none;
}
.archive-card .project-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}
.archive-card .project-info p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
.archive-card .project-info h3 {
  font-family: var(--font-korean);
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  overflow-wrap: anywhere;
}
.archive-card .project-info > .mono {
  max-width: 100%;
  text-align: left;
}
.archive-card .archive-image {
  width: 100%;
  aspect-ratio: 16 / 10;
}
.archive-card .archive-image img {
  object-position: top center;
}
.archive-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-top: 36px;
  padding-top: 18px;
  border-top: 1px solid var(--color-line);
}
.archive-pagination button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  font: inherit;
}
.archive-pagination button:not(:disabled):hover {
  color: var(--color-orange);
}
@media (min-width: 761px) and (max-width: 1199px) {
  .project-tags {
    top: 12px;
    right: 12px;
  }
  .project-status {
    padding: 4px 7px;
    font-size: 10px;
  }
  .archive-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px 20px;
  }
}
@media (max-width: 760px) {
  .project-tags {
    top: 12px;
    right: 12px;
  }
  .project-status {
    padding: 4px 7px;
    font-size: 10px;
  }
  .archive-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 28px 14px;
  }
  .archive-card .project-info p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}
.archive-card .project-info h3 {
    font-size: 17px;
  }
  .archive-card .project-info p {
    font-size: 14px;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }
  .archive-card .text-link {
    font-size: 11px;
    gap: 6px;
  }
  .archive-pagination {
    font-size: 11px;
    gap: 10px;
  }
}

.project-outline { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.project-outline rect { width: calc(100% - 2px); height: calc(100% - 2px); fill: none; stroke: var(--color-orange); stroke-width: 1; stroke-dasharray: 1; stroke-dashoffset: 1; }
.archive-card:hover .project-outline rect,
.archive-card:focus-within .project-outline rect { stroke-dashoffset: 0; transition: stroke-dashoffset 900ms ease-in-out; }
.archive-card .text-link { border-bottom: 0; }
@media (prefers-reduced-motion: reduce) {
  .archive-card:hover .project-outline rect,
  .archive-card:focus-within .project-outline rect { transition: none; }
}
.about-section h2 { container-type: inline-size; min-width: 0; }
.about-section h2 > span { display: block; white-space: nowrap; font-size: min(76px, 10cqw); line-height: 1.2; letter-spacing: -0.045em; }
.skills-ribbon { margin-top: 42px; min-width: 0; }
.skills-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 16px; font-size: 12px; }
.skills-controls { display: flex; gap: 6px; }
.skills-controls button { display: grid; place-items: center; width: 42px; height: 42px; border: 1px solid var(--color-line); background: transparent; }
.skills-controls button:hover { border-color: var(--color-orange); }
.skills-controls svg { width: 15px; height: 15px; }
.skills-viewport { overflow: hidden; cursor: grab; touch-action: pan-y; user-select: none; }
.skills-viewport.is-dragging { cursor: grabbing; }
.skills-track { display: flex; width: max-content; will-change: transform; }
.skill-tile { flex: 0 0 116px; width: 116px; height: 116px; margin-right: 10px; padding: 0; border: 1px solid var(--color-line); background: #eeede7; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; position: relative; }
.skill-tile:hover { border-color: var(--color-orange); }
.skill-number { position: absolute; top: 8px; left: 10px; font-size: 9px; color: var(--color-muted); }
.skill-symbol { position: relative; display: flex; align-items: baseline; justify-content: center; min-width: 58px; height: 46px; margin-top: 8px; font: 500 43px/1.2 Georgia, serif; letter-spacing: -4px; animation: skill-breathe 7s ease-in-out infinite; }
.skill-symbol::after { content: ''; position: absolute; right: -3px; bottom: 1px; width: 4px; height: 4px; border-radius: 50%; background: var(--color-orange); }
.skill-letter { display: inline-block; transform-origin: bottom center; }
.skill-letter.letter-1 { font-style: italic; margin-left: -3px; transform: translateY(2px); }
.skill-letter.letter-2 { font-size: .8em; font-style: italic; transform: translateY(3px); margin-left: -2px; }
.skill-tile:nth-child(3n) .letter-0 { font-style: italic; }
.skill-tile:nth-child(4n) .letter-1 { font-family: Arial, sans-serif; font-style: normal; font-size: .7em; }
.skill-name { font-size: 11px; line-height: 1.2; white-space: nowrap; color: var(--color-muted); }
.skills-caption { display: flex; justify-content: space-between; gap: 12px; margin-top: 22px; padding-top: 15px; border-top: 1px solid var(--color-line); font-size: 10px; }
.skills-ribbon.is-paused .skill-symbol { animation-play-state: paused; }
@keyframes skill-breathe { 0%, 65%, 100% { transform: translateY(0); } 80% { transform: translateY(-3px); } }
@media (max-width: 760px) {
  .skills-ribbon { margin-top: 30px; }
  .skills-heading { font-size: 11px; }
  .skill-tile { flex-basis: 102px; width: 102px; height: 102px; gap: 10px; }
  .skill-symbol { font-size: 37px; height: 40px; }
  .skills-caption { font-size: 9px; flex-wrap: wrap; }
}
@media (prefers-reduced-motion: reduce) { .skill-symbol { animation: none; } }
.about-section, .poster-archive { scroll-margin-top: 0; }
.section-transition { margin-top: 64px; }
@media (max-width: 760px) { .section-transition { margin-top: 36px; } }

.poster-archive { border-top-color: transparent; }
.about-section { border-top: 0; }
.work-section { padding-top: 0; }
.work-projects {
  --color-paper: #1c1d1a;
  --color-ink: #f1f0e9;
  --color-muted: #b8bab0;
  --color-line: #44463f;
  margin-inline: calc(-1 * var(--gutter));
  padding: 90px var(--gutter) 64px;
  background: var(--color-paper);
  color: var(--color-ink);
}
.work-projects .archive-image { background: #292b25; }
.work-projects .archive-pagination { border-top: 0; }
@media (max-width: 760px) { .work-projects { padding-top: 55px; padding-bottom: 40px; } }

body { line-height: 1.2; }
.site-header { background: transparent; color: #191916; transition: color 180ms ease; }
.site-header.is-on-dark { --color-paper: #1c1d1a; --color-ink: #f1f0e9; color: #f1f0e9; }
.poster-copy { padding: 0; }

.site-header {
  margin-inline: calc(-1 * var(--gutter));
  padding-inline: 0;
  background: transparent;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  transition: color 180ms ease, background-color 180ms ease;
}
.site-header.is-on-dark { background: transparent; }
.contact-heading {
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  border-bottom: 0;
}
.contact-heading h2 { font-size: clamp(44px, 5.6vw, 96px); }
.contact-links { align-items: center; gap: 22px; padding-bottom: 0; }
.about-section > div { align-items: start; }
.about-copy { min-width: 0; }
.about-copy p { max-width: 100%; }
@media (max-width: 760px) {
  .contact-heading h2 { font-size: clamp(38px, 8.8vw, 60px); }
  .contact-links { gap: 16px; }
}
.site-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-inline: var(--gutter);
}

.contact-links > span { overflow-wrap: anywhere; min-width: 0; }
@media (min-width: 761px) and (max-width: 1100px) {
  .about-section { margin-top: 24px; padding-top: 24px; }
}
@media (min-width: 761px) and (max-width: 900px) {
  .work-projects .section-heading { flex-direction: column; align-items: flex-start; gap: 12px; }
  .work-projects .section-aside { color: var(--color-muted); margin-bottom: 0; }
  .archive-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .about-section > div { grid-template-columns: .5fr 1fr; gap: 0; }
}
@media (max-width: 768px) { .archive-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

.contact-links { text-transform: none; align-items: baseline; }
.contact-links > span,
.contact-links > a {
  display: inline-block;
  min-height: 0;
  padding: 0;
  font: inherit;
  line-height: 1.2;
  text-transform: none;
}
@media (max-width: 500px) {
  .archive-grid { grid-template-columns: minmax(0, 1fr); }
  .about-section { margin-top: 0; }
}
@media (max-width: 500px) {
  .poster-archive { grid-template-columns: minmax(0, 1fr); }
  .poster-archive > span:not(:last-child) { display: none; }
  .poster-archive > span:last-child { justify-self: center; }
}
@media (max-width: 500px) {
  .section-transition { margin-top: 12px; padding-block: 12px; }
  .about-section { margin-top: 0; padding-top: 16px; }
}

.mobile-menu-footer { display: none; }
@media (max-width: 760px) {
  .page-shell { padding-top: var(--header-height); }
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-inline: 0;
    z-index: 100;
  }
  .site-header:has(.main-nav.is-open) {
    background: var(--color-paper);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  .main-nav {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    height: calc(100dvh - var(--header-height));
    padding: 24px var(--gutter) max(24px, env(safe-area-inset-bottom));
    overflow-y: auto;
    overscroll-behavior: contain;
    box-shadow: none;
    border-bottom: 0;
  }
  .main-nav.is-open { gap: 0; }
  .main-nav > a {
    padding: 22px 12px;
    min-height: 64px;
    font-size: clamp(24px, 6vw, 36px);
  }
  .main-nav > .resume-link { display: none; }
  .mobile-menu-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    margin-top: auto;
    padding: 32px 12px 0;
    text-transform: none;
    font-size: 12px;
    letter-spacing: 0;
  }
  .mobile-menu-footer > span { max-width: 100%; overflow-wrap: anywhere; }
  .mobile-menu-footer > a {
    padding: 12px 0;
    min-height: 44px;
    border: 0;
    font: inherit;
    text-transform: none;
  }
}

.archive-more { display: flex; flex-direction: column; align-items: center; gap: 18px; margin-top: 32px; color: var(--color-muted); }
.archive-more button { display: inline-flex; align-items: center; justify-content: center; gap: 14px; min-height: 44px; padding: 12px 32px; border: 1px solid var(--color-line); color: var(--color-ink); font: inherit; }
.archive-more button:hover { border-color: var(--color-orange); }
@media (max-width: 760px) {
  .work-toolbar { flex-wrap: wrap; }
  .mobile-menu-footer.contact-links { flex-direction: row; flex-wrap: wrap; align-items: baseline; gap: 16px; font-size: 14px; padding: 32px 0 0; }
  .mobile-menu-footer.contact-links > a { min-height: 0; padding: 0; font: inherit; line-height: 1.2; border: 0; }
}

.archive-item { position: relative; display: flex; min-width: 0; }
.archive-item > .archive-card { width: 100%; flex: 1; padding-bottom: 66px; color: inherit; text-decoration: none; }
.archive-project-button { position: absolute; left: 10px; bottom: 10px; z-index: 1; margin-top: 0; border-bottom: 0; background: transparent; color: inherit; font: inherit; font-size: 14px; }
.archive-project-button svg { transition: color 180ms ease; }
.archive-item:hover .archive-project-button svg,
.archive-item:focus-within .archive-project-button svg { color: var(--color-orange); }
.archive-item:hover .project-outline rect,
.archive-item:focus-within .project-outline rect { stroke-dashoffset: 0; transition: stroke-dashoffset 900ms ease-in-out; }
@media (max-width: 760px) { .archive-project-button { font-size: 11px; gap: 6px; } }
@media (prefers-reduced-motion: reduce) {
  .archive-item:hover .project-outline rect,
  .archive-item:focus-within .project-outline rect { transition: none; }
}

`;
export default GlobalStyles;

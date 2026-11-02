import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import GlobalStyles from '@/components/GlobalStyles';
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry';
export const metadata:Metadata={title:'Back. — 백승민 · Full-stack Developer',description:'아이디어를 구조로, 구조를 경험으로. 풀스택 개발자 백승민의 프로젝트와 개발 기록을 담는 포트폴리오.',applicationName:'Back.',openGraph:{title:'Back. — A closer look.',description:'백승민의 프로젝트와 개발 기록',locale:'ko_KR',type:'website'}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#f5f4f0',colorScheme:'light'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="ko"><body><StyledComponentsRegistry><GlobalStyles/>{children}</StyledComponentsRegistry></body></html>}

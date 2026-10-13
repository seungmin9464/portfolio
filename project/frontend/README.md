# Portfolio

Next.js App Router를 사용하는 포트폴리오 프로젝트입니다.

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다.

## 프로젝트 구조

- `src/app/`: 페이지와 루트 레이아웃
- `src/app/page.tsx`: 홈 화면에서 `Header`, `Main`, `Nav`, `Footer`를 배치합니다.
- `src/app/layout.tsx`: 한국어 문서 설정, Pretendard 폰트 로드, styled-components 레지스트리 설정
- `src/components/Main.tsx`: 홈 화면의 주요 콘텐츠와 슬로건
- `src/components/Header.tsx`: 프로필 요약과 구직 상태, 이력서 링크
- `src/components/Nav.tsx`: 화면 하단에 고정된 주요 섹션 내비게이션
- `src/components/Footer.tsx`: 저작권 문구와 페이지 맨 위로 이동 버튼
- `src/components/GlobalStyles.tsx`: 전역 초기화, 기본 글꼴, 색상·글자 크기 등의 CSS 변수
- `src/components/StyledComponentsRegistry.tsx`: App Router 서버 렌더링용 styled-components 스타일 수집

컴포넌트 스타일은 각 컴포넌트 파일에서 styled-components로 작성합니다. 공통 색상과 글자 크기는 `GlobalStyles.tsx`의 CSS 변수를 사용합니다. 홈 화면 콘텐츠는 `Main.tsx`에서 필요한 컴포넌트를 import해 구성합니다.

헤더의 구직 상태를 바꾸려면 `src/components/Header.tsx`에서 `isLookingForJob` 값을 수정합니다. `true`면 “구직 중”, `false`면 “구직 중 아님”으로 표시되며 상태 표시 점의 색상도 함께 변경됩니다. `Contact Me`를 클릭하면 구직 중일 때 `public/resume.pdf`가 다운로드되고, 구직 중이 아닐 때는 안내 알림이 표시됩니다. 다운로드 기능을 사용하려면 이력서 파일을 `public/resume.pdf` 경로에 준비하세요.

## 검사 및 빌드

```bash
npm run lint
npm run build
npm run start
```

## 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [styled-components 문서](https://styled-components.com/docs)
- [Pretendard](https://github.com/orioncactus/pretendard)

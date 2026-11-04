# 프로젝트 추가·수정·삭제

현재는 관리자 화면이나 데이터베이스 없이 파일로 프로젝트를 관리합니다.

## 추가

1. 이미지를 `public/projects/` 폴더에 저장합니다. 폴더가 없다면 만듭니다.
2. `src/data/projects.ts`의 `projects` 배열에 아래 형식으로 항목을 추가합니다.

```ts
export const projects: Project[] = [
  {
    id: 'my-project',
    title: '프로젝트 이름',
    description: '어떤 문제를 해결한 프로젝트인지 한 줄로 작성합니다.',
    image: '/projects/my-project.webp',
    category: 'personal',
    stack: 'Next.js · TypeScript',
    href: 'https://example.com',
    published: true,
  },
];
```

위 내용은 입력 형식 예시입니다. 이미지 파일과 링크는 실제 작업물로 바꿔주세요.

- `id`: 프로젝트마다 겹치지 않는 고유 이름입니다.
- `category`: 실무 작업은 `'client'`, 개인 작업은 `'personal'`입니다.
- `image`: `public`을 빼고 `/projects/파일명.webp`처럼 씁니다.
- `href`: 실제 사이트나 상세 설명 페이지 주소입니다. 링크가 없으면 이 항목을 생략합니다.
- `published`: `false`로 바꾸면 데이터를 남겨둔 채 화면에서 숨깁니다. 생략하면 표시됩니다.

## 수정·삭제·순서 변경

- 수정: 해당 항목의 제목, 설명, 이미지 경로 등을 바꾸고 저장합니다.
- 삭제: 해당 `{ ... },` 항목 전체를 배열에서 지웁니다.
- 비공개: 해당 항목에 `published: false`를 지정합니다.
- 순서 변경: 배열 안에서 항목을 위아래로 옮깁니다. 앞쪽부터 표시됩니다.

## 화면 반영

로컬 개발 서버에서는 저장하면 화면에 반영됩니다. 배포된 사이트에는 변경 후 다시 빌드·배포해야 반영됩니다.

선택한 필터에 표시할 프로젝트가 없을 때만 `Good work takes shape.`와 `Coming soon`이 나타납니다. 프로젝트를 등록하면 해당 필터에서는 프로젝트 카드로 바뀝니다.

이미지 업로드·등록·삭제 버튼으로 관리하려면 인증을 포함한 관리자 화면과 저장소 연결 작업이 별도로 필요합니다.

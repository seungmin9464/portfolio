export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'client' | 'personal';
  stack: string;
  href?: string;
  published?: boolean;
  status?: 'in-progress';
};

// 배열 순서대로 표시하며, published: false인 프로젝트는 숨깁니다.
// 설명은 공개 사이트의 구성과 기존 포트폴리오의 담당 작업 기록을 함께 참고했습니다.
// 기술은 현재 공개 소스 또는 기존 작업 기록에서 확인한 항목입니다. 당시 전체 개발 환경을 의미하지 않습니다.
export const projects: Project[] = [
  {
    id: 'naengkeum',
    title: '냉큼',
    description:
      '냉장고 속 보유 재료를 관리하고, 재료와 취향에 맞는 한 끼를 찾는 모바일 중심 서비스입니다. 재료 등록과 보관 관리, 요리 추천·식사 기록 흐름을 직접 기획하고 개발하고 있습니다.',
    image: '/projects/naengkeum.svg',
    category: 'personal',
    stack: 'React · TypeScript · Vite · Firebase · Capacitor',
    status: 'in-progress',
    published: true,
  },
  {
    id: '036',
    title: '한국전통문화예절원',
    description:
      '전통문화와 예절교육을 소개하는 반응형 홈페이지입니다. 메인 상단의 메뉴를 선택하면 해당 콘텐츠로 화면이 전환되도록 구성해, 주제별 정보를 한 화면에서 탐색할 수 있도록 제작했습니다.',
    image: '/projects/project-img1.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'https://koreawd.mycafe24.com/',
    published: false,
  },
  {
    id: '035',
    title: '클린어벤져스',
    description:
      '이사·입주청소 서비스와 청소창업 교육을 소개하는 브랜드 홈페이지입니다. 서비스의 차별점과 교육 안내에서 청소 문의로 이어지는 화면을 구성하고, PC와 모바일에 맞춘 반응형 페이지를 제작했습니다.',
    image: '/projects/project-img2.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'https://www.cleanavengers.com/main/index.php',
    published: true,
  },
  {
    id: '034',
    title: '연세365온의원',
    description:
      '연세365온의원의 홈페이지 제작과 반응형 화면 구현을 담당한 프로젝트입니다. PC와 모바일의 화면 크기에 맞춰 페이지 레이아웃을 구성하는 작업을 진행했습니다.',
    image: '/projects/project-img3.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'http://www.yonsei365on.com/main/index.php',
    published: true,
  },
  {
    id: '033',
    title: '올케어의원',
    description:
      '병원 소개와 눈·코 수술, 리프팅, 피부·레이저 시술을 안내하는 의원 홈페이지입니다. 진료 분야별 메뉴와 의료진·진료시간·위치 정보를 담은 페이지를 제작하고, 모바일에서도 정보를 확인할 수 있도록 반응형 화면을 구현했습니다.',
    image: '/projects/project-img4.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'http://allcareprs.com/main/index.php',
    published: true,
  },
  {
    id: '032',
    title: '서원h&g',
    description:
      '부동산개발, 외식, 제조·가공, 카페·베이커리 등 서원 H&G의 사업을 소개하는 기업 홈페이지입니다. 사업 분야별 콘텐츠와 브랜드 소개, 관련 기사·영상으로 이어지는 화면을 제작하고 다양한 기기에 대응하는 반응형 레이아웃을 구성했습니다.',
    image: '/projects/project-img5.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'http://seowonhng.com/main/index.php',
    published: true,
  },
  {
    id: '031',
    title: '고운이비인후과',
    description:
      '귀·코·목 진료와 수면검사, 수액클리닉 등 진료 분야를 소개하는 이비인후과 홈페이지입니다. 의료진, 병원 시설, 소식과 진료 안내를 담은 화면을 제작하고, 예약·위치 정보를 확인할 수 있는 반응형 페이지로 구성했습니다.',
    image: '/projects/project-img6.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'http://gowoonclinic.com/main/index.php',
    published: true,
  },
  {
    id: '030',
    title: '병점센트럴이비인후과',
    description:
      '원데이 수술, 난청·이명, 어지럼증, 코골이·수면센터를 안내하는 병원 홈페이지입니다. 진료센터별 소개와 의료진·장비·운영시간 정보를 담은 페이지를 제작하고, PC와 모바일에서 사용할 수 있는 반응형 화면을 구현했습니다.',
    image: '/projects/project-img7.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'http://www.bjcentral.com/main/index.php',
    published: true,
  },
  {
    id: '029',
    title: '성포본척척',
    description:
      '척추·관절 진료와 비수술 치료, 도수치료 등 의원의 진료 정보를 소개하는 홈페이지입니다. 진료 분야와 의료장비, 의료진, 진료시간·오시는 길을 담은 페이지를 제작하고 반응형 레이아웃으로 구성했습니다.',
    image: '/projects/project-img8.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Slick',
    href: 'http://bonechukchuk365.com/main/index.php',
    published: true,
  },
  {
    id: '028',
    title: '시어닥터',
    description:
      '병원 현장·경영·마케팅 컨설팅을 소개하고 무료 진단 신청으로 연결하는 서비스 홈페이지입니다. 반응형 페이지 제작과 함께 GSAP 기반의 스크롤 인터랙션을 구현해, 서비스 소개와 사례 콘텐츠가 화면 흐름에 따라 전개되도록 작업했습니다.',
    image: '/projects/project-img9.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · jQuery · Swiper · GSAP · ScrollTrigger · AOS · Slick',
    href: 'http://seeadoctor.co.kr/main/index.php',
    published: true,
  },
  {
    id: '027',
    title: '데네브의원',
    description:
      '피부관리, 다이어트, 안티에이징 등 데네브의원의 진료 분야를 소개하는 홈페이지입니다. 시술 안내와 장비·내부 공간, 공지·이벤트 정보를 담은 페이지를 제작하고, 모바일에서도 진료와 위치 정보를 살펴볼 수 있도록 구성했습니다.',
    image: '/projects/project-img10.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS',
    href: 'http://denebclinic.com/main/index.php',
    published: true,
  },
  {
    id: '026',
    title: '삼성퍼스티어',
    description:
      '산과·부인과 진료와 예방접종, 여성건강 클리닉을 안내하는 산부인과 홈페이지입니다. 의료진과 병원 공간, 진료 일정·소식, 예약 안내를 담은 페이지를 제작하고 PC와 모바일에 대응하는 반응형 화면을 구현했습니다.',
    image: '/projects/project-img11.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Slick',
    href: 'http://www.firstierobgy.com/main/index.php',
    published: true,
  },
  {
    id: '025',
    title: '경희 명 한의원',
    description:
      '경희 명 한의원의 홈페이지 제작과 반응형 화면 구현을 담당한 프로젝트입니다. 페이지를 스크롤할 때 화면 효과가 나타나도록 인터랙션을 작업해 콘텐츠에 움직임을 더했습니다.',
    image: '/projects/project-img12.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git · GSAP · ScrollTrigger',
    href: 'https://koreamedicine.co.kr/main/index.php',
    published: true,
  },
  {
    id: '024',
    title: '유니풀 의원',
    description:
      '유니풀 의원의 홈페이지와 반응형 페이지를 제작한 프로젝트입니다. GSAP을 활용한 인트로 애니메이션을 구현해 사이트 진입 화면에 움직임을 더했습니다.',
    image: '/projects/project-img13.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git · GSAP · ScrollTrigger',
    href: 'http://uniful.clinic/main/index.php',
    published: true,
  },
  {
    id: '023',
    title: '어울림',
    description:
      '어울림 홈페이지의 제작과 반응형 화면 구현을 담당한 프로젝트입니다. 접속 경로에 따라 연결되는 링크가 달라지도록 분기 처리를 구현했습니다.',
    image: '/projects/project-img14.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'https://www.theoulim.com/main/index.php',
    published: true,
  },
  {
    id: '022',
    title: '공공디자인 2024',
    description:
      '공공디자인 페스티벌 2024의 행사와 프로그램, 지역협력도시·전국 거점을 안내하는 홈페이지입니다. 행사 소개와 프로그램별 상세 정보로 이어지는 페이지를 제작하고, PC와 모바일 환경에 대응하는 반응형 레이아웃을 구현했습니다.',
    image: '/projects/project-img15.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Slick',
    href: 'https://festival.publicdesign.kr/2024/main/index.php',
    published: true,
  },
  {
    id: '021',
    title: '공공디자인 2023',
    description:
      '공공디자인 페스티벌 2023의 주제전시와 프로그램 일정, 서울·부산·전국 거점 정보를 담은 행사 홈페이지입니다. 전시·프로그램별 안내 화면을 제작하고, 여러 기기에서 행사 정보를 탐색할 수 있도록 반응형 페이지를 구성했습니다.',
    image: '/projects/project-img16.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'https://festival.publicdesign.kr/2023/main/index.php',
    published: true,
  },
  {
    id: '020',
    title: 'LIFE SHOT',
    description:
      'LIFE SHOT의 홈페이지 제작과 반응형 화면 구현을 담당한 프로젝트입니다. Swiper와 스크롤 인터랙션을 결합해 메인 콘텐츠가 전환되는 화면을 제작했습니다.',
    image: '/projects/project-img17.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'http://lifeshot.photography/main/index.php',
    published: false,
  },
  {
    id: '019',
    title: '정신건강 아카데미',
    description:
      '마음챙김 교육 과정과 참여 방법을 안내하는 정신건강 아카데미 홈페이지입니다. 서비스 소개와 교육 시작 화면을 반응형으로 제작하고, 참여자가 응답할 수 있는 설문조사 페이지 구현을 함께 담당했습니다.',
    image: '/projects/project-img18.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'http://academy.imhc.or.kr/main/index.php',
    published: true,
  },
  {
    id: '018',
    title: 'ICH 가이드라인',
    description:
      'ICH 가이드라인 교육의 등록, 강의 자료, 프로그램, 질의응답과 설문 정보를 제공하는 교육 홈페이지입니다. 기존 홈페이지 유지보수를 담당했으며, 교육 운영에 필요한 안내 콘텐츠와 페이지를 관리하는 작업에 참여했습니다.',
    image: '/projects/project-img19.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Slick',
    href: 'http://www.ich-elearning.kr/main/index.php',
    published: true,
  },
  {
    id: '017',
    title: '소개왕 김혜지',
    description:
      '소개 서비스의 철학과 이용 방식, 신청 절차를 안내하는 브랜드 홈페이지입니다. 기존 페이지 유지보수와 랜딩 페이지 제작을 담당하며, 서비스 소개를 확인하고 신청으로 이어지는 화면을 작업했습니다.',
    image: '/projects/project-img20.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · jQuery · Swiper · GSAP · ScrollTrigger · AOS · Slick',
    href: 'https://sogaewang.com/main/index.php',
    published: true,
  },
  {
    id: '016',
    title: '365(ON)온가정의원',
    description:
      '365(ON)온가정의원의 홈페이지 제작과 반응형 화면 구현을 담당한 프로젝트입니다. PC와 모바일에서 사용할 수 있도록 화면 크기에 대응하는 페이지 레이아웃을 제작했습니다.',
    image: '/projects/project-img21.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'http://365onclinic.com/main/index.php',
    published: true,
  },
  {
    id: '015',
    title: '패러다임피부과',
    description:
      '패러다임피부과 홈페이지의 제작과 반응형 작업을 담당한 프로젝트입니다. PC와 모바일의 화면 크기에 맞춰 레이아웃을 구성하고 홈페이지 화면을 구현했습니다.',
    image: '/projects/project-img22.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · jQuery · Swiper · AOS · Git',
    href: 'http://paradigmskin.co.kr/main/index.php',
    published: true,
  },
  {
    id: '014',
    title: '숭인',
    description:
      '법무법인 숭인의 전문 분야와 상담 후기, 변호사·상담 정보를 소개하는 홈페이지입니다. 메인 페이지 개편과 스크롤에 반응하는 화면 효과를 담당해, 콘텐츠가 전개되는 흐름에 인터랙션을 더했습니다.',
    image: '/projects/project-img23.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · jQuery · GSAP · ScrollTrigger · AOS · Slick',
    href: 'http://www.soongin.co.kr/main/index.php',
    published: true,
  },
  {
    id: '013',
    title: '이지듀',
    description:
      '피부 고민과 제품 유형별로 상품을 탐색할 수 있는 이지듀 온라인 스토어입니다. 메인과 상품 상세 페이지 제작을 담당하고, 상세 페이지 내 계산 기능을 JavaScript로 구현했습니다.',
    image: '/projects/project-img24.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · Cafe24 · jQuery · Swiper · AOS · Slick',
    href: 'https://easydew.co.kr/',
    published: true,
  },
  {
    id: '012',
    title: '퍼셀',
    description:
      '스킨케어 제품과 브랜드 연구 콘텐츠, 고객 리뷰를 소개하는 퍼셀 온라인 스토어입니다. 페이지 내 JavaScript 효과 구현을 담당하며, 브랜드와 제품 콘텐츠에 인터랙션을 더하는 작업에 참여했습니다.',
    image: '/projects/project-img25.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · Cafe24 · jQuery · Swiper · GSAP · ScrollTrigger · AOS',
    href: 'https://purcell.kr/',
    published: true,
  },
  {
    id: '011',
    title: '클럭',
    description:
      '마사지기와 생활가전 제품을 소개·판매하는 클럭 공식 온라인 스토어입니다. 메인 페이지를 제작하고 Swiper 슬라이더를 쇼핑몰 모듈과 연동해, 운영 데이터와 연결되는 콘텐츠 영역을 구현했습니다.',
    image: '/projects/project-img26.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · Cafe24 · jQuery · Swiper · GSAP · ScrollTrigger · AOS',
    href: 'https://klug.kr/',
    published: true,
  },
  {
    id: '010',
    title: '핑거수트',
    description:
      '프레스온 네일과 폴리쉬, 시즌 컬렉션을 소개하는 핑거수트 온라인 스토어입니다. 상품 상세 페이지 제작과 유지보수를 담당해, 제품 정보를 담는 콘텐츠 화면을 작업했습니다.',
    image: '/projects/project-img27.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · Cafe24 · jQuery · Swiper',
    href: 'https://fingersuit.kr/',
    published: true,
  },
  {
    id: '009',
    title: '블랑네이처',
    description:
      '브랜드 철학과 스킨케어 상품, 이벤트를 소개하는 블랑네이처 온라인 스토어입니다. 메인 페이지를 제작하고 상품별 할인율 계산과 배너 상품이 두 개씩 전환되는 기능을 구현했습니다.',
    image: '/projects/project-img28.webp',
    category: 'client',
    stack: 'HTML · CSS · JavaScript · Cafe24 · jQuery · Swiper',
    href: 'https://blancnature.co.kr/',
    published: true,
  },
  {
    id: '008',
    title: '안다르',
    description:
      '레깅스와 운동복 등 애슬레저 제품을 판매하는 안다르 온라인 스토어입니다. 상품 상세 페이지 제작과 유지보수를 담당하며, 제품 정보를 전달하는 콘텐츠 화면을 작업했습니다.',
    image: '/projects/project-img29.webp',
    category: 'client',
    stack:
      'HTML · CSS · JavaScript · Cafe24 · jQuery · Swiper · GSAP · ScrollTrigger · Slick',
    href: 'https://andar.co.kr/product/list.html?cate_no=2017',
    published: true,
  },
  {
    id: '007',
    title: '모두의 예체능',
    description:
      '모두의 예체능 홈페이지 제작에 참여한 프로젝트입니다. 개발자와 Git을 통해 소스 변경 사항을 공유하며 협업하고, 홈페이지 화면 구현을 담당했습니다.',
    image: '/projects/project-img30.webp',
    category: 'client',
    stack: 'HTML · CSS · scss · JavaScript · jQuery · React · Swiper · Git',
    href: 'https://coach.mo-ye.com/c1/auth/login',
    published: true,
  },
  {
    id: '006',
    title: '이효바이오',
    description:
      '생명과학 연구용 제품과 브랜드, 학술·제품 소식을 소개하는 이효바이오싸이언스 홈페이지입니다. 홈페이지 전체 리뉴얼을 담당하고, Git을 활용해 개발자와 협업하며 기업 소개와 제품·소식 화면을 작업했습니다.',
    image: '/projects/project-img31.webp',
    category: 'client',
    stack: 'HTML · CSS · scss · JavaScript · jQuery · Swiper · Git',
    href: 'http://www.leehyobio.com/main',
    published: true,
  },
  {
    id: '005',
    title: '위더스',
    description:
      '위더스 홈페이지 전체 리뉴얼을 담당한 프로젝트입니다. 기존 홈페이지를 새롭게 제작하는 과정에서 Git을 활용해 개발자와 변경 사항을 공유하며 협업했습니다.',
    image: '/projects/project-img32.webp',
    category: 'client',
    stack: 'Git',
    href: 'http://withus.cc/',
    published: true,
  },
  {
    id: '004',
    title: '시큐이클라우드',
    description:
      '회사 자사 홈페이지인 시큐이클라우드 제작에 참여한 프로젝트입니다. 디자이너·개발자와 함께 화면을 구현하고 Git을 통해 소스 변경 사항을 관리하며 협업했습니다.',
    image: '/projects/project-img33.webp',
    category: 'client',
    stack: 'HTML · CSS · scss · JavaScript · jQuery · Swiper · Git',
    href: 'https://secuecloud.co.kr/',
    published: true,
  },
  {
    id: '003',
    title: '이지플랫폼',
    description:
      '회사 자사 홈페이지인 이지플랫폼 제작에 참여한 프로젝트입니다. 디자이너·개발자와 협업하며 화면을 구현하고 Git으로 작업 내역을 공유했습니다.',
    image: '/projects/project-img34.webp',
    category: 'client',
    stack: 'HTML · CSS · scss · JavaScript · jQuery · Swiper · Git',
    href: 'https://secu-email.com/',
    published: true,
  },
  {
    id: '002',
    title: '기원테크',
    description:
      '회사 자사 홈페이지인 기원테크 제작에 참여한 프로젝트입니다. 디자이너·개발자와 화면을 제작하고 Git을 통해 변경 사항을 관리하며 협업했습니다.',
    image: '/projects/project-img35.webp',
    category: 'client',
    stack: 'HTML · CSS · scss · JavaScript · jQuery · Swiper · Git',
    href: 'https://www.kiwontech.com/',
    published: true,
  },
  {
    id: '001',
    title: 'kissu',
    description:
      '기존 kissu 홈페이지를 새롭게 제작한 리뉴얼 프로젝트입니다. 디자이너·개발자와 협업하며 홈페이지 화면 제작을 담당했습니다.',
    image: '/projects/project-img36.webp',
    category: 'client',
    stack: 'HTML · CSS · scss · JavaScript · jQuery · Swiper · Git',
    href: 'https://kissu.co.kr/',
    published: true,
  },
];

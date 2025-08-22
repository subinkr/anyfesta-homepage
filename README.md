# AnyFesta Homepage

AnyFesta 앱의 공식 홈페이지입니다.

## 프로젝트 소개

AnyFesta는 애니메이션과 문화 이벤트를 한 곳에서 만날 수 있는 이벤트 플랫폼입니다.
이 홈페이지는 앱의 주요 기능을 소개하고, 사용자들에게 필요한 정보를 제공합니다.

## 주요 페이지

- **메인 페이지** (`/`): AnyFesta 앱 기능 소개
- **개인정보 처리방침** (`/privacy`): 개인정보 처리 관련 안내
- **비밀번호 초기화** (`/password-reset`): 비밀번호 재설정 완료 안내
- **이메일 인증** (`/email-verification`): 이메일 인증 완료 안내

## 기술 스택

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **Pretendard** font for Korean typography

## 개발 환경 설정

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

### 테스트

```bash
npm test
```

## 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── Header.tsx      # 페이지 헤더
│   └── Footer.tsx      # 페이지 푸터
├── pages/              # 페이지 컴포넌트
│   ├── HomePage.tsx    # 메인 페이지
│   ├── PrivacyPolicyPage.tsx    # 개인정보 처리방침
│   ├── PasswordResetPage.tsx    # 비밀번호 초기화
│   └── EmailVerificationPage.tsx # 이메일 인증
├── App.tsx             # 메인 앱 컴포넌트
└── index.tsx           # 엔트리 포인트
```

## 디자인 시스템

### 컬러

- **Primary**: #1A237E (Indigo 900)
- **Secondary**: #6B7280 (Gray 600)

### 폰트

- **Korean**: Pretendard
- **Fallback**: system-ui, sans-serif

## 배포

이 프로젝트는 정적 호스팅 서비스(Netlify, Vercel 등)에 배포할 수 있습니다.

## 라이선스

MIT License
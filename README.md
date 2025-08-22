# AnyFesta Homepage

AnyFesta 앱의 공식 홈페이지입니다.

## 프로젝트 소개

AnyFesta는 애니메이션과 문화 이벤트를 한 곳에서 만날 수 있는 이벤트 플랫폼입니다.
이 홈페이지는 앱의 주요 기능을 소개하고, 사용자들에게 필요한 정보를 제공합니다.

## 주요 페이지

- **메인 페이지** (`/`): AnyFesta 앱 기능 소개
- **개인정보 처리방침** (`/privacy`): 개인정보 처리 관련 안내
- **비밀번호 재설정** (`/password-reset`): Supabase를 사용한 비밀번호 재설정
- **비밀번호 재설정 확인** (`/password-reset/confirm`): 새 비밀번호 설정
- **이메일 인증** (`/email-verification`): 이메일 인증 완료 안내

## 기술 스택

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **Supabase** for authentication
- **Pretendard** font for Korean typography

## 개발 환경 설정

### 설치

```bash
npm install
```

### Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트를 생성합니다.
2. 프로젝트 설정에서 URL과 anon key를 복사합니다.
3. 프로젝트 루트에 `.env` 파일을 생성하고 다음 내용을 추가합니다:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Supabase 프로젝트에서 Authentication > Settings > URL Configuration에서 Site URL을 설정합니다.

#### 비밀번호 재설정 설정

비밀번호 재설정 기능이 제대로 작동하려면 다음 설정이 필요합니다:

1. **Site URL 설정**: Authentication > Settings > URL Configuration에서 Site URL을 `https://www.anyfesta.com`으로 설정
2. **Redirect URLs 설정**: Additional Redirect URLs에 다음 URL들을 추가:
   - `https://www.anyfesta.com/password-reset/confirm`
   - `https://www.anyfesta.com/email-verification`
3. **Email Templates 설정**: Authentication > Email Templates에서 비밀번호 재설정 이메일 템플릿의 Action URL이 올바르게 설정되어 있는지 확인

#### 문제 해결

**"비밀번호 재설정 코드가 유효하지 않습니다" 에러가 발생하는 경우:**

1. **Supabase 프로젝트 설정 확인**:
   - Site URL이 `https://anyfesta.com`으로 정확히 설정되어 있는지 확인
   - Redirect URLs에 `/password-reset/confirm` 경로가 포함되어 있는지 확인

2. **브라우저 개발자 도구 확인**:
   - Console 탭에서 에러 메시지 확인
   - Network 탭에서 Supabase API 호출 상태 확인

3. **환경 변수 확인**:
   - `.env` 파일에 올바른 Supabase URL과 API 키가 설정되어 있는지 확인

4. **도메인 설정 확인**:
   - `anyfesta.com`과 `www.anyfesta.com` 중 어떤 도메인을 사용하는지 확인
   - Supabase 설정과 일치하는지 확인

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
├── lib/                # 유틸리티 및 설정
│   └── supabase.ts     # Supabase 클라이언트 설정
├── pages/              # 페이지 컴포넌트
│   ├── HomePage.tsx    # 메인 페이지
│   ├── PrivacyPolicyPage.tsx    # 개인정보 처리방침
│   ├── PasswordResetPage.tsx    # 비밀번호 재설정
│   ├── PasswordResetConfirmPage.tsx # 비밀번호 재설정 확인
│   └── EmailVerificationPage.tsx # 이메일 인증
├── App.tsx             # 메인 앱 컴포넌트
└── index.tsx           # 엔트리 포인트
```

## 비밀번호 재설정 기능

이 프로젝트는 Supabase Authentication을 사용하여 비밀번호 재설정 기능을 제공합니다:

1. **비밀번호 재설정 요청** (`/password-reset`): 사용자가 이메일을 입력하면 재설정 링크를 전송
2. **비밀번호 변경** (`/password-reset/confirm`): 이메일 링크를 통해 새 비밀번호 설정

### 보안 기능

- 이메일 인증을 통한 안전한 비밀번호 재설정
- 최소 6자 이상의 비밀번호 요구
- 비밀번호 확인을 통한 입력 오류 방지

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
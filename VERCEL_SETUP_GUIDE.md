# Vercel 배포 설정 가이드

## 🎯 개요

Vercel을 사용하여 anyfesta.com을 배포하고 있으며, Google Search Console의 "리디렉션이 포함된 페이지" 문제를 해결하기 위한 설정입니다.

## 📁 생성된 파일

### 1. `vercel.json`
Vercel 배포 설정 파일로 다음을 포함합니다:
- SPA 라우팅 설정 (rewrites)
- www → non-www 리디렉션 (redirects)
- 보안 헤더 설정
- 캐싱 최적화

## 🚀 Vercel 대시보드 설정

### 1. 도메인 설정

Vercel 대시보드에서 프로젝트 설정:

1. **프로젝트 선택** → **Settings** → **Domains**

2. **도메인 추가**
   ```
   anyfesta.com (Primary)
   www.anyfesta.com (Redirect to anyfesta.com)
   ```

3. **www 리디렉션 설정**
   - `www.anyfesta.com` 추가 시
   - "Redirect to anyfesta.com" 옵션 선택
   - 이렇게 하면 Vercel이 자동으로 301 리디렉션 처리

### 2. HTTPS 설정

Vercel은 자동으로 HTTPS를 제공하므로 별도 설정 불필요:
- ✅ Let's Encrypt SSL 인증서 자동 발급
- ✅ HTTP → HTTPS 자동 리디렉션
- ✅ HSTS 헤더 자동 추가

### 3. 환경 변수 확인

**Settings** → **Environment Variables**에서 확인:
```
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_key
```

## 🔧 DNS 설정

도메인 등록업체(가비아, 후이즈, AWS Route53 등)에서:

### A 레코드
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)
```

### CNAME 레코드
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**참고**: Vercel 대시보드에서 정확한 DNS 설정값을 확인하세요.

## ✅ 배포 및 테스트

### 1. 변경사항 푸시

```bash
git add .
git commit -m "Fix: Vercel 설정으로 www 리디렉션 및 SEO 문제 해결"
git push origin main
```

Vercel이 자동으로 배포를 시작합니다.

### 2. 배포 확인

Vercel 대시보드에서:
- **Deployments** 탭에서 배포 상태 확인
- 빌드 로그 확인
- 배포 완료 후 프리뷰 URL 확인

### 3. 리디렉션 테스트

배포 완료 후 터미널에서 테스트:

```bash
# www → non-www 리디렉션 테스트
curl -I https://www.anyfesta.com/
# 예상: 308 Permanent Redirect → https://anyfesta.com/

# HTTP → HTTPS 리디렉션 테스트 (Vercel 자동 처리)
curl -I http://anyfesta.com/
# 예상: 308 Permanent Redirect → https://anyfesta.com/

# 최종 URL 확인
curl -I https://anyfesta.com/
# 예상: 200 OK
```

### 4. 브라우저 테스트

다음 URL들을 브라우저에서 직접 테스트:
- `http://anyfesta.com/` → `https://anyfesta.com/`로 리디렉션
- `http://www.anyfesta.com/` → `https://anyfesta.com/`로 리디렉션
- `https://www.anyfesta.com/` → `https://anyfesta.com/`로 리디렉션
- `https://anyfesta.com/` → 정상 로드 ✅

## 📊 Vercel vs Netlify 차이점

### Vercel의 장점
- ✅ HTTP → HTTPS 자동 리디렉션 (설정 불필요)
- ✅ 도메인 설정에서 www 리디렉션 간편 설정
- ✅ 빠른 글로벌 CDN
- ✅ React 앱에 최적화

### 설정 방식 차이

| 항목 | Netlify | Vercel |
|------|---------|--------|
| 설정 파일 | `netlify.toml` + `_redirects` | `vercel.json` |
| www 리디렉션 | 파일에 명시 | 대시보드 + vercel.json |
| HTTPS 강제 | 파일에 명시 | 자동 처리 |
| SPA 라우팅 | `_redirects` | `vercel.json` rewrites |

## 🔍 Google Search Console 검증

### 1. 배포 후 24시간 대기

Vercel 배포 후 DNS 전파 및 리디렉션이 안정화될 때까지 대기합니다.

### 2. 리디렉션 확인

모든 URL이 올바르게 리디렉션되는지 확인:
```bash
# 여러 번 테스트하여 일관성 확인
for i in {1..5}; do
  echo "Test $i:"
  curl -sI https://www.anyfesta.com/ | grep -i "location\|http"
  sleep 1
done
```

### 3. Search Console 검증 요청

1. **Google Search Console 접속**
   - https://search.google.com/search-console

2. **속성 확인**
   - `anyfesta.com` 속성이 있는지 확인
   - 없다면 속성 추가 (도메인 속성 권장)

3. **수정사항 검증**
   - 좌측 메뉴: "색인 생성" → "페이지"
   - "리디렉션이 포함된 페이지" 섹션 찾기
   - **"수정사항 검증"** 버튼 클릭

4. **개별 URL 재크롤링**
   - 상단 URL 검사 도구 사용
   - 주요 페이지 입력:
     ```
     https://anyfesta.com/
     https://anyfesta.com/privacy
     https://anyfesta.com/terms
     ```
   - "색인 생성 요청" 클릭

### 4. 모니터링

- **1-3일**: Google 재크롤링 시작
- **1-2주**: 대부분의 페이지 재색인
- **2-4주**: Search Console에 완전 반영

## 🎯 Vercel 도메인 설정 상세 가이드

### 단계별 설정

1. **Vercel 대시보드 접속**
   - https://vercel.com/dashboard

2. **프로젝트 선택**
   - anyfesta-homepage 프로젝트 클릭

3. **Settings → Domains**

4. **anyfesta.com 추가**
   - "Add" 버튼 클릭
   - `anyfesta.com` 입력
   - DNS 설정 안내에 따라 A 레코드 추가

5. **www.anyfesta.com 추가**
   - "Add" 버튼 클릭
   - `www.anyfesta.com` 입력
   - **중요**: "Redirect to anyfesta.com" 옵션 체크 ✅
   - DNS 설정 안내에 따라 CNAME 레코드 추가

6. **DNS 전파 대기**
   - 최대 48시간 소요 가능
   - https://dnschecker.org 에서 확인

## 🔧 문제 해결

### 리디렉션이 작동하지 않는 경우

1. **Vercel 도메인 설정 재확인**
   ```
   ✅ anyfesta.com - Primary Domain
   ✅ www.anyfesta.com - Redirect to anyfesta.com
   ```

2. **DNS 설정 확인**
   ```bash
   # A 레코드 확인
   dig anyfesta.com A
   
   # CNAME 레코드 확인
   dig www.anyfesta.com CNAME
   ```

3. **캐시 클리어**
   - 브라우저 캐시 삭제
   - CDN 캐시 퍼지 (Vercel은 자동)

4. **배포 로그 확인**
   - Vercel 대시보드 → Deployments
   - 최근 배포 클릭 → Build Logs 확인

### vercel.json 오류

만약 배포 시 오류가 발생하면:

1. **JSON 문법 확인**
   ```bash
   # JSON 유효성 검사
   cat vercel.json | python -m json.tool
   ```

2. **Vercel 문서 참조**
   - https://vercel.com/docs/configuration

### Google Search Console 문제

1. **속성 소유권 확인**
   - 도메인 속성으로 설정 권장
   - TXT 레코드로 소유권 인증

2. **sitemap.xml 제출**
   - Search Console → Sitemaps
   - `https://anyfesta.com/sitemap.xml` 제출

3. **인내심**
   - Google 재크롤링은 시간이 걸림
   - 매일 확인하지 말고 1주일 단위로 확인

## 📋 체크리스트

### 배포 전
- [x] `vercel.json` 파일 생성
- [x] `public/sitemap.xml` 업데이트
- [x] `public/index.html` canonical URL 추가
- [x] 모든 페이지 canonical URL 확인

### Vercel 설정
- [ ] 프로젝트가 Vercel에 연결되어 있는지 확인
- [ ] `anyfesta.com` 도메인 추가 (Primary)
- [ ] `www.anyfesta.com` 도메인 추가 (Redirect)
- [ ] DNS 설정 완료
- [ ] HTTPS 인증서 발급 확인

### 배포 후
- [ ] Git push 및 자동 배포 확인
- [ ] 빌드 성공 확인
- [ ] www → non-www 리디렉션 테스트
- [ ] HTTP → HTTPS 리디렉션 테스트
- [ ] 모든 페이지 정상 로드 확인
- [ ] Google Search Console 검증 요청
- [ ] 1주일 후 재확인

## 🎉 예상 결과

### 수정 전
```
❌ http://anyfesta.com/ (크롤링됨)
❌ http://www.anyfesta.com/ (크롤링됨)
→ 중복 URL 문제
```

### 수정 후
```
✅ http://anyfesta.com/ → 308 → https://anyfesta.com/
✅ http://www.anyfesta.com/ → 308 → https://anyfesta.com/
✅ https://www.anyfesta.com/ → 308 → https://anyfesta.com/
✅ https://anyfesta.com/ (200 OK) ← 단일 정규 URL
```

## 📞 추가 지원

- **Vercel 문서**: https://vercel.com/docs
- **Vercel 지원**: https://vercel.com/support
- **Google Search Console 도움말**: https://support.google.com/webmasters

---

**작성일**: 2025-10-20  
**버전**: 1.0  
**플랫폼**: Vercel

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { supabase } from './lib/supabase';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PasswordResetPage from './pages/PasswordResetPage';
import PasswordResetConfirmPage from './pages/PasswordResetConfirmPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import Header from './components/Header';
import Footer from './components/Footer';

// Supabase 인증 상태를 처리하는 컴포넌트
const AuthHandler: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleAuth = async () => {
      console.log('AuthHandler 실행됨, 현재 URL:', window.location.href);
      console.log('Search params:', location.search);
      console.log('Hash params:', location.hash);
      
      // URL에서 code 쿼리 파라미터 확인 (비밀번호 재설정용)
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get('code');
      
      // URL에서 액세스 토큰과 리프레시 토큰 확인 (hash 파라미터)
      const hashParams = new URLSearchParams(location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const refreshToken = hashParams.get('refresh_token');
      const type = hashParams.get('type');

      // 비밀번호 재설정 코드가 있는 경우
      if (code) {
        console.log('비밀번호 재설정 코드 감지됨:', code);
        
        try {
          // Supabase v2에서 비밀번호 재설정 코드 처리
          console.log('비밀번호 재설정 코드 처리 시작...');
          
          // 먼저 현재 세션 상태 확인
          const { data: { session }, error: sessionError } = await supabase.auth.getSession();
          
          if (sessionError) {
            console.error('세션 확인 오류:', sessionError);
            navigate('/password-reset?error=session_error');
            return;
          }
          
          // Supabase v2.38.0+ 에서는 exchangeCodeForSession 사용
          // PKCE 플로우를 위해 code_verifier가 필요할 수 있음
          console.log('exchangeCodeForSession 호출 시작...');
          const { data, error } = await supabase.auth.exchangeCodeForSession(code);
          
          if (error) {
            console.error('코드 교환 오류:', error);
            console.error('에러 상세:', {
              message: error.message,
              status: error.status,
              name: error.name
            });
            
            // PKCE 에러인 경우 다른 방법 시도
            if (error.message.includes('code verifier')) {
              console.log('PKCE 에러 감지, 다른 방법 시도...');
              // 여기서 다른 접근 방식 시도
              navigate('/password-reset?error=pkce_error');
              return;
            }
            
            navigate('/password-reset?error=invalid_code');
            return;
          }

          if (data.session) {
            console.log('세션이 설정되었습니다:', data.session);
            console.log('사용자 정보:', data.user);
            // 비밀번호 재설정 확인 페이지로 이동
            navigate('/password-reset/confirm');
          } else {
            console.log('세션 데이터가 없습니다:', data);
            navigate('/password-reset?error=no_session');
          }
        } catch (error) {
          console.error('코드 처리 중 예외 발생:', error);
          navigate('/password-reset?error=processing_error');
        }
        return;
      }

      // 기존 hash 파라미터 처리 (이메일 확인 등)
      if (accessToken && refreshToken && type === 'recovery') {
        console.log('비밀번호 재설정 토큰 감지됨');
        
        // 세션 설정
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        
        if (error) {
          console.error('세션 설정 오류:', error);
          navigate('/password-reset?error=session_error');
        } else {
          console.log('세션이 설정되었습니다:', data);
          // 비밀번호 재설정 확인 페이지로 이동
          navigate('/password-reset/confirm');
        }
      }
    };

    handleAuth();
  }, [location, navigate]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <Header />
        <main>
          <AuthHandler />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
            <Route path="/password-reset/confirm" element={<PasswordResetConfirmPage />} />
            <Route path="/email-verification" element={<EmailVerificationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
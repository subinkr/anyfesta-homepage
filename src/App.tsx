import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { supabase } from './lib/supabase';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
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
    // URL에서 액세스 토큰과 리프레시 토큰 확인
    const hashParams = new URLSearchParams(location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const refreshToken = hashParams.get('refresh_token');
    const type = hashParams.get('type');

    if (accessToken && refreshToken && type === 'recovery') {
      // 비밀번호 재설정 토큰이 있는 경우
      console.log('비밀번호 재설정 토큰 감지됨');
      
      // 세션 설정
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).then(({ data, error }) => {
        if (error) {
          console.error('세션 설정 오류:', error);
          navigate('/password-reset?error=session_error');
        } else {
          console.log('세션이 설정되었습니다:', data);
          // 비밀번호 재설정 확인 페이지로 이동
          navigate('/password-reset/confirm');
        }
      });
    }
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
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/password-reset" element={<PasswordResetPage />} />
            <Route path="/password-reset/confirm" element={<PasswordResetConfirmPage />} />
            <Route path="/email-verification" element={<EmailVerificationPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
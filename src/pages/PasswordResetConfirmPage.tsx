import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const PasswordResetConfirmPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidSession, setIsValidSession] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // 현재 세션 상태 확인
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error || !session) {
        setMessage('유효하지 않은 링크입니다. 비밀번호 재설정을 다시 요청해주세요.');
        setIsValidSession(false);
        return;
      }

      // recovery 타입인지 확인 (비밀번호 재설정용)
      // Supabase에서 비밀번호 재설정으로 생성된 세션은 recovery 타입이 아닐 수 있음
      // 대신 사용자가 인증된 상태인지만 확인
      if (session.user && session.user.aud === 'authenticated') {
        console.log('유효한 세션 확인됨:', session.user);
        setIsValidSession(true);
      } else {
        setMessage('유효하지 않은 링크입니다. 비밀번호 재설정을 다시 요청해주세요.');
        setIsValidSession(false);
      }
    };

    checkSession();
  }, []);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidSession) {
      setMessage('유효하지 않은 세션입니다.');
      return;
    }

    if (!password || !confirmPassword) {
      setMessage('모든 필드를 입력해주세요.');
      setIsSuccess(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('비밀번호가 일치하지 않습니다.');
      setIsSuccess(false);
      return;
    }

    if (password.length < 6) {
      setMessage('비밀번호는 최소 6자 이상이어야 합니다.');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        throw error;
      }

      setMessage('비밀번호가 성공적으로 변경되었습니다.');
      setIsSuccess(true);
      
      // 비밀번호 변경 후 로그아웃
      await supabase.auth.signOut();
    } catch (error: any) {
      setMessage(error.message || '비밀번호 변경 중 오류가 발생했습니다.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  // 유효하지 않은 세션이면 에러 메시지 표시
  if (!isValidSession && !isSuccess) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              링크 오류
            </h1>
            <p className="text-gray-600 mb-8">
              {message}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center space-y-6">
              <a 
                href="/password-reset" 
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors block text-center"
              >
                비밀번호 재설정 다시 요청하기
              </a>
              <a 
                href="/" 
                className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors block text-center"
              >
                홈페이지로 돌아가기
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              비밀번호 변경 완료
            </h1>
            <p className="text-gray-600 mb-8">
              비밀번호가 성공적으로 변경되었습니다.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-left">
                    <h3 className="text-sm font-medium text-blue-800 mb-1">
                      보안을 위한 안내
                    </h3>
                    <p className="text-sm text-blue-700">
                      안전한 비밀번호 사용을 위해 정기적으로 비밀번호를 변경해주세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a 
                  href="anyfesta://login" 
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors block text-center"
                >
                  앱에서 로그인하기
                </a>
                <a 
                  href="/" 
                  className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors block text-center"
                >
                  홈페이지로 돌아가기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            새 비밀번호 설정
          </h1>
          <p className="text-gray-600 mb-8">
            새로운 비밀번호를 입력해주세요.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handlePasswordUpdate} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                새 비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="새 비밀번호를 입력하세요"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                새 비밀번호 확인
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="새 비밀번호를 다시 입력하세요"
              />
            </div>

            {message && (
              <div className={`p-3 rounded-lg text-sm ${
                isSuccess 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '변경 중...' : '비밀번호 변경하기'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a 
              href="/" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              홈페이지로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetConfirmPage;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const PasswordResetPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // URL에서 에러 파라미터 확인
    const error = searchParams.get('error');
    if (error) {
      let errorMessage = '';
      switch (error) {
        case 'session_error':
          errorMessage = '비밀번호 재설정 링크가 만료되었거나 유효하지 않습니다. 다시 시도해주세요.';
          break;
        case 'invalid_code':
          errorMessage = '비밀번호 재설정 코드가 유효하지 않습니다. 다시 시도해주세요.';
          break;
        case 'processing_error':
          errorMessage = '비밀번호 재설정 처리 중 오류가 발생했습니다. 다시 시도해주세요.';
          break;
        case 'no_session':
          errorMessage = '세션을 생성할 수 없습니다. 비밀번호 재설정을 다시 요청해주세요.';
          break;
        default:
          errorMessage = '비밀번호 재설정 중 오류가 발생했습니다. 다시 시도해주세요.';
      }
      setMessage(errorMessage);
      setIsSuccess(false);
    }
  }, [searchParams]);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('이메일 주소를 입력해주세요.');
      setIsSuccess(false);
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      // 현재 도메인을 기반으로 리다이렉트 URL 설정
      const redirectUrl = `${window.location.origin}/password-reset/confirm`;
      console.log('리다이렉트 URL:', redirectUrl);
      
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (error) {
        throw error;
      }

      setMessage('비밀번호 재설정 링크가 이메일로 전송되었습니다. 이메일을 확인해주세요.');
      setIsSuccess(true);
    } catch (error: any) {
      console.error('비밀번호 재설정 오류:', error);
      setMessage(error.message || '비밀번호 재설정 요청 중 오류가 발생했습니다.');
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

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
              이메일 전송 완료
            </h1>
            <p className="text-gray-600 mb-8">
              비밀번호 재설정 링크가 이메일로 전송되었습니다.
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
                      다음 단계
                    </h3>
                    <p className="text-sm text-blue-700">
                      이메일에 포함된 링크를 클릭하여 새 비밀번호를 설정해주세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail('');
                    setMessage('');
                  }}
                  className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  다시 시도하기
                </button>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            비밀번호 재설정
          </h1>
          <p className="text-gray-600 mb-8">
            가입한 이메일 주소를 입력하면 비밀번호 재설정 링크를 보내드립니다.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handlePasswordReset} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일 주소
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="example@email.com"
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
              {isLoading ? '전송 중...' : '비밀번호 재설정 링크 보내기'}
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

        <div className="text-center">
          <p className="text-sm text-gray-600">
            문제가 지속되시나요?{' '}
            <a 
              href="mailto:support@anyfesta.app" 
              className="text-primary hover:text-primary/80 font-medium"
            >
              고객지원 문의하기
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetPage;

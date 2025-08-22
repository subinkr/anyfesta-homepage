import React from 'react';

const PasswordResetPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            비밀번호 재설정 완료
          </h1>
          <p className="text-gray-600 mb-8">
            비밀번호가 성공적으로 재설정되었습니다.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                재설정이 완료되었습니다
              </h2>
              <p className="text-gray-600">
                새로운 비밀번호로 AnyFesta 앱에 로그인할 수 있습니다.
              </p>
            </div>

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

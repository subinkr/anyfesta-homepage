import React from 'react';

const EmailVerificationPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            이메일 인증 완료
          </h1>
          <p className="text-gray-600 mb-8">
            이메일 인증이 성공적으로 완료되었습니다.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                인증이 완료되었습니다!
              </h2>
              <p className="text-gray-600">
                이제 AnyFesta의 모든 기능을 이용할 수 있습니다.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-left">
                  <h3 className="text-sm font-medium text-blue-800 mb-1">
                    이제 시작해보세요!
                  </h3>
                  <p className="text-sm text-blue-700">
                    앱에서 로그인하여 다양한 이벤트를 탐색하고 만들어보세요.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <h3 className="text-sm font-medium text-gray-900 text-left">
                다음 단계:
              </h3>
              <div className="space-y-2 text-left">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  관심있는 카테고리 설정하기
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  주변 이벤트 탐색하기
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  첫 번째 이벤트 만들어보기
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a 
                href="anyfesta://login" 
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors block text-center"
              >
                앱에서 시작하기
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
            앱 다운로드가 필요하신가요?{' '}
            <a 
              href="https://apps.apple.com" 
              className="text-primary hover:text-primary/80 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
            {' '}또는{' '}
            <a 
              href="https://play.google.com" 
              className="text-primary hover:text-primary/80 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;

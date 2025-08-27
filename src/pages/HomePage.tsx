import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              다양한 이벤트를 <br />
              <span className="text-primary">AnyFesta</span>에서 만나보세요
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              콜라보 카페, 극장판 개봉, 라이브 행사 등 <br />
              원하는 이벤트를 쉽게 찾고 참여하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://apps.apple.com/app/any-festa/id6751448187" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                App Store에서 다운로드
              </a>
                          <a 
              href="https://play.google.com/apps/internaltest/4700832596480305863" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              안드로이드 앱 테스트 참여
            </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AnyFesta의 주요 기능
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 이벤트 관리 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">이벤트 관리</h3>
              <p className="text-gray-600">
                이벤트 생성, 조회, 수정, 삭제가 가능합니다. 
                날짜와 시간을 설정하고 상세 정보를 입력해보세요.
              </p>
            </div>

            {/* 카테고리 시스템 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">카테고리 분류</h3>
              <p className="text-gray-600">
                애니메이션, 만화, 음악, 스포츠 등 다양한 카테고리로 
                원하는 이벤트를 쉽게 찾을 수 있습니다.
              </p>
            </div>

            {/* 위치 정보 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">위치 정보</h3>
              <p className="text-gray-600">
                Google Maps API를 통한 정확한 위치 검색과 설정으로 
                이벤트 장소를 쉽게 확인할 수 있습니다.
              </p>
            </div>

            {/* 이벤트 공유 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">이벤트 공유</h3>
              <p className="text-gray-600">
                이벤트를 생성하면 자동으로 공개되어 
                다른 사용자들이 쉽게 찾고 참여할 수 있습니다.
              </p>
            </div>

            {/* 사용자 인증 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">안전한 인증</h3>
              <p className="text-gray-600">
                Supabase 기반 이메일 인증으로 
                안전하고 신뢰할 수 있는 서비스를 제공합니다.
              </p>
            </div>

            {/* 반응형 UI */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">모던 UI</h3>
              <p className="text-gray-600">
                Material Design 3 기반의 깔끔하고 직관적인 
                사용자 인터페이스를 경험해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이렇게 간단해요
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">회원가입</h3>
              <p className="text-gray-600">
                이메일 인증으로 간단하게 회원가입하세요
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">이벤트 탐색 및 공유</h3>
              <p className="text-gray-600">
                이벤트를 찾아보거나 새로운 이벤트를 등록해보세요
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">참여</h3>
              <p className="text-gray-600">
                관심있는 이벤트에 참여하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 시작해보세요
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://apps.apple.com/app/any-festa/id6751448187" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              App Store에서 다운로드
            </a>
            <a 
              href="https://play.google.com/apps/internaltest/4700832596480305863" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              안드로이드 앱 테스트 참여
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

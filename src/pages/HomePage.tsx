import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 py-20 relative overflow-hidden">
        {/* 배경 애니메이션 효과 */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-white text-sm font-medium">오타쿠 정보 공유 플랫폼</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              오타쿠 정보를<br />
              <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                한 곳에서
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              🎭 코스프레 이벤트 • 🎵 오타쿠 라이브 공연 • 🍰 콜라보 카페 • 🛍️ 팝업스토어<br />
              <span className="font-semibold">모든 오타쿠 정보를 한 곳에서!</span>
            </p>
            
            {/* 실시간 통계 */}
            <div className="text-center">
              <div className="text-3xl font-bold text-white">실시간</div>
              <div className="text-white/80 text-sm">채팅, 이벤트 알림, 위치 공유</div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">270+</div>
                <div className="text-white/80 text-sm">등록된 이벤트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-white/80 text-sm">활성 사용자</div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 justify-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://apps.apple.com/app/any-festa/id6751448187" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-purple-700 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
                >
                  <span className="text-3xl">📱</span>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">Download on the</div>
                    <div className="text-xl font-bold">App Store</div>
                  </div>
                </a>
                
                <a 
                  href="https://app.anyfesta.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-white/50 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
                >
                  <span className="text-3xl">🌐</span>
                  <div className="text-left">
                    <div className="text-sm text-white/70">Try the</div>
                    <div className="text-xl font-bold">Web Version</div>
                  </div>
                </a>


                <a 
                  href="https://play.google.com/store/apps/details?id=com.anyfesta.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
                >
                  <span className="text-3xl">🤖</span>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">GET IT ON</div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              주요 기능
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">AnyFesta</span>의 주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              오타쿠 이벤트를 쉽게 찾고 참여할 수 있는 기능들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 레벨 & 경험치 시스템 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">레벨 & 경험치 시스템</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-amber-600">활동할수록 성장하는 재미!</span><br/>
                이벤트 등록, 관심 이벤트 설정, 장소 방문으로 경험치를 획득하고 레벨업하세요. 
                나만의 오타쿠 프로필을 성장시켜보세요!
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                경험치 획득 • 레벨업 • 프로필 성장
              </div>
            </div>

            {/* 배지 챌린지 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">배지 챌린지</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-yellow-600">특별한 장소를 방문하고 배지 획득!</span><br/>
                오타쿠 성지 순례, 애니메이션 명소 탐방 등 다양한 배지 챌린지에 도전하세요. 
                인기 배지를 확인하고 다른 유저들과 함께 즐겨보세요!
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                장소 방문 • 배지 획득 • 습득 유저 수
              </div>
            </div>

            {/* 실시간 채팅 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">실시간 채팅</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-green-600">관심 이벤트 등록 = 자동 채팅방 입장!</span><br/>
                애니메이션 극장판, 오타쿠 라이브 공연, 코스프레 이벤트 등에서 
                같은 취향의 친구들과 실시간으로 소통하세요.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                실시간 메시지 • 참여자 목록 • 관리자 기능
              </div>
            </div>

            {/* 개인 맞춤 캘린더 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">개인 맞춤 캘린더</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">관심 카테고리 설정으로 완벽한 맞춤!</span><br/>
                애니메이션, 음악, 코스프레 등 관심 분야만 골라서 보세요. 
                개인 일정과 이벤트를 한 번에 관리할 수 있습니다.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                관심 카테고리 • 개인 일정
              </div>
            </div>

            {/* 오타쿠 전용 카테고리 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎌</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">오타쿠 전용 카테고리</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-orange-600">오타쿠만을 위한 특별한 분류!</span><br/>
                애니메이션 극장판, 오타쿠 라이브 공연, 코스프레 이벤트, 팝업스토어, 
                콜라보 카페 등 오타쿠 문화에 특화된 카테고리로 쉽게 찾아보세요.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                애니메이션 • 음악 • 코스프레 • 팝업스토어
              </div>
            </div>

            {/* 위치 기반 검색 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">스마트 위치 검색</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">Google Maps 연동으로 정확한 위치!</span><br/>
                홍대, 강남, 신촌 등 오타쿠 명소 근처의 이벤트를 쉽게 찾고, 
                정확한 위치 정보로 길 잃지 마세요.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Google Maps • 근처 이벤트 • 길찾기 연동
              </div>
            </div>

            {/* 티켓팅 정보 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎫</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">티켓팅 정보 관리</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-yellow-600">티켓팅 놓치지 마세요!</span><br/>
                애니메이션 극장판, 오타쿠 라이브 공연, 라이브 이벤트의 
                티켓팅 시작일과 종료일을 한눈에 확인하고 놓치지 마세요.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                티켓팅 알림 • 시작/종료일 • 예매 링크
              </div>
            </div>

            {/* 푸시 알림 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">스마트 알림</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-red-600">중요한 이벤트를 놓치지 마세요!</span><br/>
                관심 카테고리 이벤트, 관심 이벤트 시작 알림, 채팅 메시지 등 
                맞춤형 푸시 알림으로 중요한 순간을 놓치지 않습니다.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                이벤트 알림 • 채팅 알림 • 맞춤 알림
              </div>
            </div>

            {/* 개인 일정 관리 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">개인 일정 관리</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-teal-600">나만의 일정도 함께 관리!</span><br/>
                오타쿠 정보와 개인 일정을 한 곳에서 관리하세요. 
                월별 캘린더 뷰로 모든 일정을 한눈에 확인할 수 있습니다.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                개인 일정 • 월별 뷰 • 통합 관리
              </div>
            </div>

            {/* 크로스 플랫폼 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">어디서나 접속</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-indigo-600">iOS, Android, 웹 모두 지원!</span><br/>
                집에서는 웹으로, 밖에서는 앱으로. 
                어떤 기기에서든 동일한 경험을 제공합니다.
              </p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                iOS 앱 • Android 앱 • 웹 버전
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 레벨 & 배지 시스템 하이라이트 */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              성장 시스템
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">레벨업</span>하고 <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">배지</span>를 모으세요!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              활동할수록 성장하는 재미! 경험치를 모아 레벨업하고 특별한 배지를 획득하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* 레벨 시스템 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-3xl">⭐</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">레벨 시스템</h3>
                  <p className="text-gray-600">활동으로 경험치 획득</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📝</span>
                  <div>
                    <div className="font-semibold text-gray-900">이벤트 등록 +10 XP</div>
                    <div className="text-sm text-gray-600">새로운 이벤트를 등록하면 경험치 획득</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⭐</span>
                  <div>
                    <div className="font-semibold text-gray-900">관심 이벤트 설정 +1 XP</div>
                    <div className="text-sm text-gray-600">관심 이벤트를 추가할 때마다 경험치 획득</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📍</span>
                  <div>
                    <div className="font-semibold text-gray-900">장소 방문 +10 XP (첫 방문)</div>
                    <div className="text-sm text-gray-600">새로운 장소를 방문하면 경험치 획득</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔄</span>
                  <div>
                    <div className="font-semibold text-gray-900">재방문 +1 XP</div>
                    <div className="text-sm text-gray-600">24시간 후 재방문 시 경험치 획득</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 배지 시스템 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">배지 챌린지</h3>
                  <p className="text-gray-600">특별한 장소 방문으로 배지 획득</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🗺️</span>
                  <div>
                    <div className="font-semibold text-gray-900">다양한 배지 챌린지</div>
                    <div className="text-sm text-gray-600">오타쿠 성지 순례, 애니메이션 명소 탐방 등</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">👥</span>
                  <div>
                    <div className="font-semibold text-gray-900">습득 유저 수 확인</div>
                    <div className="text-sm text-gray-600">인기 배지를 확인하고 다른 유저들과 함께 도전</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <div className="font-semibold text-gray-900">완료 상태 추적</div>
                    <div className="text-sm text-gray-600">배지별 진행 상황을 한눈에 확인</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎖️</span>
                  <div>
                    <div className="font-semibold text-gray-900">프로필에 배지 전시</div>
                    <div className="text-sm text-gray-600">획득한 배지를 프로필에 자랑스럽게 표시</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 성장의 재미 */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 border border-amber-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎮 게임처럼 즐기는 오타쿠 활동!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                이벤트에 참여하고, 장소를 방문하고, 배지를 모으면서 <span className="font-semibold text-amber-600">나만의 오타쿠 프로필</span>을 성장시켜보세요. 
                레벨이 오르고 배지가 쌓일수록 더욱 특별한 경험을 할 수 있습니다!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-br from-gray-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              사용 방법
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">AnyFesta</span> 사용법
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              간단한 3단계로 오타쿠 이벤트에 참여하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl font-bold">1</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">✨</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">간편 회원가입</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-purple-600">이메일만으로 30초 완료!</span><br/>
                복잡한 절차 없이 이메일 인증만으로 
                오타쿠 문화의 모든 이벤트에 참여할 수 있습니다.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                📧 이메일 인증 • 🔒 안전한 보안 • ⚡ 빠른 가입
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl font-bold">2</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">🎯</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">관심 분야 설정</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-blue-600">나만의 오타쿠 프로필 완성!</span><br/>
                애니메이션, 오타쿠 라이브 공연, 코스프레, 팝업스토어 등 
                관심 있는 분야를 선택하면 맞춤형 이벤트를 추천해드립니다.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                🎌 애니메이션 • 🎵 음악 • 👗 코스프레 • 🛍️ 팝업스토어
              </div>
            </div>

            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-white text-3xl font-bold">3</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-xs">💬</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">관심 이벤트 등록 & 채팅</h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-green-600">관심 등록 하나로 모든 게 시작!</span><br/>
                관심 있는 이벤트를 등록하면 자동으로 채팅방에 입장되어 
                같은 취향의 친구들과 실시간으로 소통할 수 있습니다.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                🎫 관심 이벤트 등록 • 💬 자동 채팅방 • 👥 친구 만들기
              </div>
            </div>
          </div>

          {/* 추가 정보 */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎉 이제 오타쿠 이벤트에 참여하세요!
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
                AnyFesta에서 <span className="font-semibold text-purple-600">애니메이션 극장판</span>, 
                <span className="font-semibold text-pink-600"> 오타쿠 라이브 공연</span>, 
                <span className="font-semibold text-blue-600"> 코스프레 이벤트</span> 등 
                다양한 오타쿠 이벤트를 찾아보세요. <br></br>
                같은 취향의 친구들과 함께 즐거운 시간을 보내세요!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 오타쿠 문화 하이라이트 섹션 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 text-sm font-medium mb-4">
              이벤트 카테고리
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">AnyFesta</span>에서 찾는<br/>
              오타쿠 이벤트들
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 오타쿠 이벤트를 카테고리별로 쉽게 찾을 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 애니메이션 */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">애니메이션</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                극장판 개봉, 시사회, 애니메이션 축제, 만화 전시회 등 
                모든 애니메이션 관련 이벤트를 한 곳에서!
              </p>
              <div className="mt-4 text-xs text-blue-600 font-medium">
                극장판 • 시사회 • 축제 • 전시회
              </div>
            </div>

            {/* 음악/아이돌 */}
            <div className="group bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-pink-200">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">오타쿠 라이브 공연</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                오타쿠 라이브 공연, 라이브 이벤트, 팬미팅, 앨범 발매 이벤트 등 
                음악 관련 모든 행사!
              </p>
              <div className="mt-4 text-xs text-pink-600 font-medium">
                콘서트 • 라이브 • 팬미팅 • 발매이벤트
              </div>
            </div>

            {/* 코스프레 */}
            <div className="group bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">코스프레</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                코스프레 이벤트, 포토세션, 워크샵, 의상 제작 클래스 등 
                코스프레 문화의 모든 것을 경험하세요!
              </p>
              <div className="mt-4 text-xs text-purple-600 font-medium">
                대회 • 포토세션 • 워크샵 • 클래스
              </div>
            </div>

            {/* 팝업스토어 */}
            <div className="group bg-gradient-to-br from-orange-50 to-amber-100 p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2 border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🛍️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">팝업스토어</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                한정판 굿즈, 콜라보 상품, 팝업 카페, 특별 전시 등 
                오타쿠를 위한 특별한 쇼핑 경험!
              </p>
              <div className="mt-4 text-xs text-orange-600 font-medium">
                굿즈 • 콜라보 • 팝업카페 • 전시
              </div>
            </div>
          </div>

          {/* 실시간 채팅 하이라이트 */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">실시간 채팅</span>으로<br/>
                같은 취향 친구들과 만나세요!
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                관심 이벤트로 등록하면 <span className="font-semibold text-green-600">자동으로 채팅방에 입장</span>됩니다!<br/>
                애니메이션 극장판에서 만난 친구들과 영화 후기를 나누고,<br/>
                오타쿠 라이브 공연에서 만난 팬들과 함께 음악을 즐기고,<br/>
                코스프레 이벤트에서 만난 코스어들과 의상 정보를 공유하세요!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-200">
                  <div className="text-2xl mb-3">🎬</div>
                  <div className="font-semibold text-gray-900 mb-2">영화 후기 공유</div>
                  <div className="text-sm text-gray-600">극장판 관람 후 같은 취향 친구들과 감상평 나누기</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-200">
                  <div className="text-2xl mb-3">🎵</div>
                  <div className="font-semibold text-gray-900 mb-2">라이브 공연 즐기기</div>
                  <div className="text-sm text-gray-600">오타쿠 라이브 공연에서 팬들과 함께 음악을 듣고 즐기기</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-green-200">
                  <div className="text-2xl mb-3">👗</div>
                  <div className="font-semibold text-gray-900 mb-2">코스프레 정보</div>
                  <div className="text-sm text-gray-600">의상 정보, 사진 촬영 장소 공유하기</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 py-20 relative overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <span className="text-white text-lg font-medium">지금 바로 시작하세요!</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            다양한 오타쿠 이벤트를<br/>
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              지금 찾아보세요
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            애니메이션 극장판, 오타쿠 라이브 공연, 코스프레 이벤트, 팝업스토어...<br/>
            <span className="font-semibold">다양한 오타쿠 이벤트를 한 곳에서!</span>
          </p>
          
          {/* 다운로드 버튼들 */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://apps.apple.com/app/any-festa/id6751448187" 
                target="_blank" 
                rel="noopener noreferrer"
                  className="bg-white text-purple-700 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <span className="text-3xl">📱</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://app.anyfesta.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white/50 text-white px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-3"
              >
                <span className="text-3xl">🌐</span>
                <div className="text-left">
                  <div className="text-sm text-white/70">Try the</div>
                  <div className="text-xl font-bold">Web Version</div>
                </div>
              </a>


              <a 
                href="https://play.google.com/store/apps/details?id=com.anyfesta.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-12 py-6 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
              >
                <span className="text-3xl">🤖</span>
                <div className="text-left">
                  <div className="text-sm text-gray-500">GET IT ON</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          {/* 추가 정보 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-white/80">
            <div className="text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-semibold text-lg mb-1">빠른 시작</div>
              <div className="text-sm">30초 만에 회원가입 완료</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔒</div>
              <div className="font-semibold text-lg mb-1">안전한 보안</div>
              <div className="text-sm">Supabase 기반 안전한 인증</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold text-lg mb-1">실시간 채팅</div>
              <div className="text-sm">같은 취향 친구들과 소통</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold text-lg mb-1">크로스 플랫폼</div>
              <div className="text-sm">iOS • Android • 웹 모두 지원</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

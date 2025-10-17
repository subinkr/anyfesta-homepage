import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage: React.FC = () => {
  const buildSection = (title: string, content: string) => (
    <section key={title} className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </section>
  );

  return (
    <div className="bg-white">
      <Helmet>
        <title>개인정보처리방침 - 애니페스타</title>
        <link rel="canonical" href="https://anyfesta.com/privacy" />
        <meta name="description" content="애니페스타의 개인정보처리방침입니다. 개인정보 수집, 이용, 보호에 관한 정책을 확인하세요." />
        <meta property="og:url" content="https://anyfesta.com/privacy" />
        <meta property="og:title" content="개인정보처리방침 - 애니페스타" />
        <meta property="og:description" content="애니페스타의 개인정보처리방침입니다." />
        <meta property="twitter:url" content="https://anyfesta.com/privacy" />
        <meta property="twitter:title" content="개인정보처리방침 - 애니페스타" />
        <meta property="twitter:description" content="애니페스타의 개인정보처리방침입니다." />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AnyFesta 개인정보처리방침
          </h1>
          <p className="text-gray-600">
            본 방침은 2025년 1월 1일부터 적용됩니다.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {buildSection(
            '1. 개인정보의 처리 목적',
            '회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.\n\n' +
            '• 서비스 제공 및 운영: 이벤트 정보 관리, 채팅 서비스, 배지 및 경험치 시스템 운영\n' +
            '• 회원 관리: 회원가입, 본인확인, 개인 식별, 부정 이용 방지\n' +
            '• 위치 기반 서비스: 이벤트 위치 표시, 주변 이벤트 검색, 장소 방문 기록\n' +
            '• 알림 서비스: 관심 이벤트 알림, 채팅 메시지 알림, 이벤트 리마인더\n' +
            '• 소셜 기능: 채팅방 운영, 이벤트 참여자 관리, 프로필 표시\n' +
            '• 고객상담 및 불만처리: 신고 접수 및 처리, 문의 응대\n' +
            '• 서비스 개선: 이용 통계 분석, 서비스 품질 향상'
          )}
          
          {buildSection(
            '2. 개인정보의 처리 및 보유기간',
            '회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.\n\n' +
            '• 회원가입 및 관리: 서비스 이용계약 또는 회원가입 해지시까지\n' +
            '• 서비스 제공: 서비스 이용계약 해지시까지\n' +
            '• 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간까지 보관'
          )}
          
          {buildSection(
            '3. 개인정보의 제3자 제공',
            '회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.'
          )}
          
          {buildSection(
            '4. 개인정보처리의 위탁',
            '회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.\n\n' +
            '• Supabase (데이터베이스 및 인증 서비스)\n' +
            '  - 위탁업무: 데이터 저장 및 관리, 사용자 인증\n' +
            '  - 위탁기간: 서비스 제공 기간\n\n' +
            '• Firebase (푸시 알림 서비스)\n' +
            '  - 위탁업무: 푸시 알림 전송\n' +
            '  - 위탁기간: 서비스 제공 기간\n\n' +
            '• Google Maps Platform (지도 서비스)\n' +
            '  - 위탁업무: 지도 표시 및 위치 검색\n' +
            '  - 위탁기간: 서비스 제공 기간'
          )}
          
          {buildSection(
            '5. 정보주체의 권리·의무 및 행사방법',
            '정보주체는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.\n\n' +
            '• 개인정보 열람요구\n' +
            '• 오류 등이 있을 경우 정정 요구\n' +
            '• 삭제요구\n' +
            '• 처리정지 요구\n\n' +
            '제1항에 따른 권리 행사는 개인정보보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.'
          )}
          
          {buildSection(
            '6. 처리하는 개인정보 항목',
            '회사는 다음의 개인정보 항목을 처리하고 있습니다.\n\n' +
            '• 필수항목: 이메일 주소, 비밀번호, 닉네임\n' +
            '• 선택항목: 프로필 이미지, 자기소개, 관심 카테고리, 소셜 미디어 계정(X/Twitter)\n' +
            '• 서비스 이용 정보: 이벤트 등록 및 참여 내역, 채팅 메시지, 관심 이벤트 목록, 장소 방문 기록, 배지 획득 내역, 경험치 및 레벨 정보\n' +
            '• 위치 정보: 이벤트 위치, 사용자가 허용한 경우 현재 위치(위치 기반 서비스 제공 목적)\n' +
            '• 기기 정보: FCM 토큰(푸시 알림용), 플랫폼 정보(iOS/Android)\n' +
            '• 자동수집항목: IP주소, 쿠키, 서비스 이용기록, 접속로그'
          )}
          
          {buildSection(
            '7. 개인정보의 파기',
            '회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.\n\n' +
            '• 전자적 파일 형태의 정보: 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제\n' +
            '• 종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각'
          )}
          
          {buildSection(
            '8. 개인정보의 안전성 확보 조치',
            '회사는 개인정보보호법 제29조에 따라 다음과 같은 안전성 확보 조치를 취하고 있습니다.\n\n' +
            '• 개인정보의 암호화: 비밀번호 등 중요 정보는 암호화하여 저장\n' +
            '• 해킹 등에 대비한 기술적 대책: 보안 프로그램 설치 및 주기적 갱신\n' +
            '• 개인정보에 대한 접근 제한: 개인정보 처리 시스템에 대한 접근권한 관리\n' +
            '• 개인정보를 처리하는 직원의 최소화 및 교육\n' +
            '• FCM 토큰 및 기기 정보의 안전한 관리'
          )}
          
          {buildSection(
            '9. 위치정보의 처리',
            '회사는 위치기반서비스 제공을 위해 다음과 같이 위치정보를 처리합니다.\n\n' +
            '• 수집 목적: 이벤트 위치 표시, 주변 이벤트 검색, 장소 방문 기록, 지도 서비스 제공\n' +
            '• 수집 방법: 사용자가 직접 입력하거나 기기의 GPS를 통해 수집(사용자 동의 필요)\n' +
            '• 보유 기간: 서비스 이용 기간 동안 보유하며, 회원 탈퇴 시 즉시 파기\n' +
            '• 위치정보는 서비스 제공 목적 외에는 사용되지 않으며, 사용자는 언제든지 위치정보 수집을 거부할 수 있습니다.\n' +
            '• 위치정보 수집을 거부하는 경우 일부 위치 기반 서비스 이용이 제한될 수 있습니다.'
          )}
          
          {buildSection(
            '10. 개인정보 보호책임자',
            '회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.\n\n' +
            '• 개인정보 보호책임자\n' +
            '  - 성명: 강수빈\n' +
            '  - 직책: 대표\n' +
            '  - 연락처: 010-7375-2401, support@anyfesta.com'
          )}
          
          {buildSection(
            '11. 개인정보 처리방침 변경',
            '이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.'
          )}
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              개인정보 관련 문의
            </h3>
            <p className="text-gray-700 mb-6">
              개인정보 처리에 관한 문의사항이 있으시면 아래로 연락해 주시기 바랍니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-900">이메일: support@anyfesta.com</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-900">전화: 010-7375-2401</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-900">주소: 서울특별시 영등포구 국회대로62길 5 502호</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

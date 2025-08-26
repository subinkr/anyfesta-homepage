import React from 'react';

const TermsOfServicePage: React.FC = () => {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AnyFesta 이용약관
          </h1>
          <p className="text-gray-600">
            본 약관은 2025년 1월 1일부터 적용됩니다.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          {buildSection(
            '제1조 (목적)',
            '본 약관은 AnyFesta(이하 "회사")가 제공하는 이벤트 정보 공유 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.'
          )}
          
          {buildSection(
            '제2조 (정의)',
            '1. "서비스"란 회사가 제공하는 이벤트 정보 공유 및 관리 서비스를 의미합니다.\n' +
            '2. "이용자"란 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 자를 의미합니다.\n' +
            '3. "콘텐츠"란 이용자가 서비스 내에 게시한 모든 형태의 정보를 의미합니다.'
          )}
          
          {buildSection(
            '제3조 (약관의 효력 및 변경)',
            '1. 본 약관은 서비스 이용을 신청한 이용자에 대하여 그 신청과 동시에 효력이 발생합니다.\n' +
            '2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있습니다.\n' +
            '3. 약관이 변경되는 경우, 회사는 변경사항을 시행일자 7일 전부터 공지사항을 통해 공지합니다.'
          )}
          
          {buildSection(
            '제4조 (서비스의 제공)',
            '1. 회사는 다음과 같은 서비스를 제공합니다:\n' +
            '   - 이벤트 정보 등록 및 관리\n' +
            '   - 이벤트 정보 검색 및 조회\n' +
            '   - 이벤트 카테고리별 분류\n' +
            '   - 위치 기반 이벤트 검색\n' +
            '2. 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다.'
          )}
          
          {buildSection(
            '제5조 (서비스 이용)',
            '1. 서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영함을 원칙으로 합니다.\n' +
            '2. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.'
          )}
          
          {buildSection(
            '제6조 (이용자의 의무)',
            '1. 이용자는 다음 행위를 하여서는 안 됩니다:\n' +
            '   - 서비스의 정상적인 운영을 방해하는 행위\n' +
            '   - 불법적이거나 부적절한 콘텐츠 게시\n' +
            '   - 타인의 권리를 침해하는 행위\n' +
            '   - 서비스의 보안을 위협하는 행위\n' +
            '2. 이용자는 본 약관 및 관련 법령을 준수해야 합니다.'
          )}
          
          {buildSection(
            '제7조 (콘텐츠 관리)',
            '1. 이용자가 게시한 콘텐츠에 대한 모든 책임은 해당 이용자에게 있습니다.\n' +
            '2. 회사는 다음에 해당하는 콘텐츠를 사전통지 없이 삭제할 수 있습니다:\n' +
            '   - 불법적이거나 부적절한 콘텐츠\n' +
            '   - 타인의 권리를 침해하는 콘텐츠\n' +
            '   - 서비스의 안정성을 해치는 콘텐츠\n' +
            '3. 회사는 이용자의 신고를 받아 24시간 이내에 부적절한 콘텐츠를 검토하고 조치합니다.'
          )}
          
          {buildSection(
            '제8조 (서비스 중단)',
            '1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.\n' +
            '2. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상하지 아니합니다.'
          )}
          
          {buildSection(
            '제9조 (개인정보보호)',
            '1. 회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 이를 준수합니다.\n' +
            '2. 개인정보의 수집, 이용, 제공 등에 관한 자세한 내용은 개인정보처리방침을 통해 확인할 수 있습니다.'
          )}
          
          {buildSection(
            '제10조 (책임제한)',
            '1. 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.\n' +
            '2. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.'
          )}
          
          {buildSection(
            '제11조 (분쟁해결)',
            '1. 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.\n' +
            '2. 회사와 이용자 간에 발생한 분쟁에 관한 소송은 회사의 주소지를 관할하는 법원에 제기합니다.'
          )}
          
          {buildSection(
            '제12조 (기타)',
            '1. 본 약관에 명시되지 않은 사항은 관계 법령 및 회사가 정한 서비스의 세부이용지침 등의 규정에 따릅니다.\n' +
            '2. 본 약관은 2025년 1월 1일부터 적용됩니다.'
          )}
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              문의 및 신고
            </h3>
            <p className="text-gray-700 mb-6">
              부적절한 콘텐츠나 이용자에 대한 신고는 24시간 이내에 처리됩니다.
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

export default TermsOfServicePage;

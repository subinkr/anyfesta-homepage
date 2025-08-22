import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            개인정보 처리방침
          </h1>
          <p className="text-gray-600">
            최종 업데이트: 2025년 8월 23일
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 개인정보의 처리 목적</h2>
            <p className="text-gray-700 mb-4">
              AnyFesta(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 
              처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
              이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 
              필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>회원 가입 및 관리</li>
              <li>이벤트 생성 및 관리 서비스 제공</li>
              <li>본인 확인 및 이메일 인증</li>
              <li>부정 이용 방지 및 서비스 개선</li>
              <li>고객 문의 및 민원 처리</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 개인정보의 처리 및 보유기간</h2>
            <p className="text-gray-700 mb-4">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 
              동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">보유기간</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>회원 탈퇴 시까지 (단, 관련 법령에 의한 보존 의무가 있는 경우 해당 기간까지)</li>
                <li>이용자가 직접 삭제를 요청하는 경우 즉시 삭제</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 처리하는 개인정보의 항목</h2>
            <p className="text-gray-700 mb-4">
              회사는 다음의 개인정보 항목을 처리하고 있습니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">필수항목</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>이메일 주소</li>
                <li>비밀번호 (암호화 저장)</li>
                <li>프로필 정보 (선택 입력)</li>
                <li>서비스 이용 기록</li>
                <li>접속 로그, 접속 IP 정보</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 
              정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 
              개인정보를 제3자에게 제공합니다.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium">
                현재 회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 개인정보 처리의 위탁</h2>
            <p className="text-gray-700 mb-4">
              회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">위탁업체</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <strong>Supabase Inc.</strong><br />
                  위탁업무: 데이터베이스 및 사용자 인증 서비스<br />
                  위탁기간: 서비스 제공 기간
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-gray-700 mb-4">
              정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>개인정보 처리현황 통지요구</li>
              <li>개인정보 열람요구</li>
              <li>개인정보 정정·삭제요구</li>
              <li>개인정보 처리정지요구</li>
            </ul>
            <p className="text-gray-700 mt-4">
              권리 행사는 개인정보보호법 시행규칙 별지 제8호에 따라 작성하여 서면, 전자우편으로 하실 수 있으며, 
              회사는 이에 대해 지체없이 조치하겠습니다.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 개인정보의 안전성 확보조치</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등</li>
              <li>기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 개인정보의 암호화, 보안프로그램 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 개인정보보호책임자</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
              개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
              아래와 같이 개인정보보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">개인정보보호책임자</h3>
              <ul className="text-gray-700 space-y-1">
                <li>이름: 강수빈</li>
                <li>이메일: support@anyfesta.com</li>
                <li>문의시간: 평일 09:00 ~ 18:00 (공휴일 제외)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 개인정보 처리방침의 변경</h2>
            <p className="text-gray-700 mb-4">
              이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 
              삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 
              고지할 것입니다.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600">
              본 방침은 2025년 8월 23일부터 시행됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;

'use client';

import ContractsItemView from './ContractsItemView';

interface Props {
  title: string;
}

function ContractsItemClient({ title }: Props) {
  const handleViewContract = () => {
    console.log('계약서 원문 열기');
  };

  const handleViewReport = () => {
    console.log('협상 가이드라인 리포트 열기');
  };

  return (
    <div>
      {/* 계약서 원문 클릭 영역 */}
      <div onClick={handleViewContract} style={{ cursor: 'pointer' }}>
        <ContractsItemView title={title} />
      </div>

      {/* 필요하면 리포트 버튼만 따로 감싸도 됨 */}
      {/* 실제로는 View 안에서 특정 영역만 분리하는 게 더 깔끔 */}
    </div>
  );
}

export default ContractsItemClient;

'use client';

import RenegoBtnView from './RenegoBtnView';

interface Props {
  remainCount: number;
}

function RenegoBtnClient({ remainCount }: Props) {
  const handleClick = () => {
    console.log('재협상 시작');
  };

  return (
    <div
      onClick={handleClick}
      style={{ cursor: 'pointer', display: 'inline-flex' }}
    >
      <RenegoBtnView remainCount={remainCount} />
    </div>
  );
}

export default RenegoBtnClient;

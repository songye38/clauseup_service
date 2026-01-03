'use client';

import { useState } from 'react';

function MainBtn() {
  const [count, setCount] = useState(3);

  const handleClick = () => {
    console.log(`이 ${count}가지만으로 질문 만들기`);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: 390,
        padding: '18px 14px',
        background: '#2B41A3',
        borderRadius: 8,
        border: 'none',
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Pretendard',
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      이 {count}가지만으로 질문 만들기
    </button>
  );
}

export default MainBtn;

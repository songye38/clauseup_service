'use client';

// import { uploadByType } from '@/actions';

interface UploadActionBtnProps {
  label: string;
  type: 'camera' | 'photo' | 'pdf';
}

function UploadActionBtn({ label, type }: UploadActionBtnProps) {
  const handleClick = async () => {
    // await uploadByType(type);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: 390,
        padding: '20px 10px',
        background: '#fff',
        borderRadius: 5,
        border: '1.6px solid #2B41A3',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
      }}
    >
      <span
        style={{
          color: '#000',
          fontSize: 16,
          fontFamily: 'Pretendard',
          fontWeight: 400,
        }}
      >
        {label}
      </span>
    </button>
  );
}

export default UploadActionBtn;

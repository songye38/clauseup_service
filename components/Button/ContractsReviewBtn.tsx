import Link from 'next/link';
import Image from 'next/image';
import { icons } from '@/lib/icons';

interface ContractsReviewBtnProps {
  href: string;
}

function ContractsReviewBtn({ href }: ContractsReviewBtnProps) {
  return (
    <Link
      href={href}
      style={{
        width: 161,
        height: 105,
        padding: 16,
        background: '#2B41A3',
        borderRadius: 12,
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          color: '#fff',
          fontSize: 19,
          fontWeight: 600,
          fontFamily: 'Pretendard',
          lineHeight: '24px',
        }}
      >
        계약서 검토하기
      </span>

      <Image
        src={icons.addContract}
        alt="계약서 검토하기"
        width={24}
        height={24}
      />
    </Link>
  );
}

export default ContractsReviewBtn;

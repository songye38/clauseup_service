import RenegoBtnClient from './Button/RenegoBtnClient';
import { icons } from '@/lib/icons'
import Image from 'next/image';
import { colors } from '@/types/colors';


interface RecentContractsItemProps {
    date: string;
    title: string;
    remainingCount: number;
}


function RecentContractsItem({
  date,
  title,
  remainingCount,
}: RecentContractsItemProps) {
  return (
    <div
      style={{
        width: '100%',
        padding: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      {/* Left Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <div
            style={{
              color: colors.black[700],
              fontSize: 13,
              fontFamily: 'Pretendard',
              fontWeight: 600,
            }}
          >
            {date}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '90%',
                color: colors.black[1300],
                fontSize: 16,
                fontFamily: 'Pretendard',
                fontWeight: 500,
                whiteSpace: 'wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {title}
            </div>
          </div>
        </div>

        {/* Renegotiation Button */}
        <RenegoBtnClient remainCount={remainingCount} />
      </div>

      {/* Right Arrow */}
      <div
        style={{
          width: 20,
          height: 20,
          flexShrink: 0,
        }}
      >
        <Image src={icons.right} alt="open" width={20} height={20} />
      </div>
    </div>
  );
}

export default RecentContractsItem;



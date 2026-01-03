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
        alignSelf: 'stretch',
        padding: 12,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {/* Header */}
        <div
          style={{
            paddingBottom: 12,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 22,
          }}
        >
          <div
            style={{
              width: 290,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                display: 'inline-flex',
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    flex: '1 1 0',
                    color: colors.black[1300],
                    fontSize: 16,
                    fontFamily: 'Pretendard',
                    fontWeight: 500,
                  }}
                >
                  {title}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Renegotiation Button (Client Component) */}
        <RenegoBtnClient remainCount={remainingCount} />
      </div>

      {/* Arrow */}
      <Image src={icons.right} alt={'alt'} width='20' height='20' />
      
    </div>
  );
}

export default RecentContractsItem;

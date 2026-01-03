import { icons } from '@/lib/icons'
import Image from 'next/image';
import { colors } from '@/types/colors';


interface ContractsItemViewProps {
  title: string;
}

function ContractsItemView({ title }: ContractsItemViewProps) {
  return (
    <div
      style={{
        width: 366,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
      }}
    >
      {/* Header */}
      <div
        style={{
          alignSelf: 'stretch',
          padding: '4px 8px',
          borderRadius: 12,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <div
          style={{
            color: colors.black[800],
            fontSize: 16,
            fontFamily: 'Pretendard',
            fontWeight: 600,
          }}
        >
          {title}
        </div>

        <div style={{ flex: '1 1 0' }} />

        {/* 클릭은 나중에 Client에서 감싼다 */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <div
            style={{
              color: colors.black[900],
              fontSize: 14,
              fontFamily: 'Pretendard',
              fontWeight: 600,
            }}
          >
            계약서 원문 보기
          </div>

          <Image src={icons.right16} alt={'alt'} width='16' height='16' />
        </div>
      </div>

      {/* Report Button */}
      <div style={{ alignSelf: 'stretch', display: 'inline-flex' }}>
        <div
          style={{
            flex: '1 1 0',
            padding: '16px 10px',
            background: colors.black[400],
            borderRadius: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              color: colors.black[1300],
              fontSize: 14,
              fontFamily: 'Pretendard',
              fontWeight: 600,
            }}
          >
            협상 가이드라인 리포트 보기
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractsItemView;

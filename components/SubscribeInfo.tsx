import Link from 'next/link';

interface SubscribeInfoProps {
  remainingCount: number; // 서버에서 오는 보유 사용권 개수
  purchaseHref: string;
  subscribeHref: string;
}

function SubscribeInfo({
  remainingCount,
  purchaseHref,
  subscribeHref,
}: SubscribeInfoProps) {
  return (
    <div
      style={{
        width: '70%',
        padding: 16,
        background: '#fff',
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {/* Top Info */}
      <div
        style={{
          paddingBottom: 12,
          borderBottom: '1px solid #D9D9D9',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              fontFamily: 'Pretendard',
              color: '#000',
            }}
          >
            보유 사용권 :
          </span>
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              fontFamily: 'Pretendard',
              color: '#000',
            }}
          >
            {remainingCount}개
          </span>
        </div>
      </div>

      {/* Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 18,
        }}
      >
        <Link
          href={purchaseHref}
          style={{
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Pretendard',
            color: '#8C8C8C',
            textDecoration: 'none',
          }}
        >
          사용권 구매
        </Link>

        <Link
          href={subscribeHref}
          style={{
            fontSize: 14,
            fontWeight: 600,
            fontFamily: 'Pretendard',
            color: '#8C8C8C',
            textDecoration: 'none',
          }}
        >
          정기 구독
        </Link>
      </div>
    </div>
  );
}

export default SubscribeInfo;


import { colors } from "@/types/colors";



interface RenegoBtnViewProps {
  remainCount: number;
}

function RenegoBtnView({ remainCount }: RenegoBtnViewProps) {
  return (
    <div
      style={{
        padding: 10,
        background: colors.primary[100],
        borderRadius: 8,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
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
        재협상하기
      </div>

      <div
        style={{
          color: colors.primary[600],
          fontSize: 12,
          fontFamily: 'Pretendard',
          fontWeight: 600,
        }}
      >
        {remainCount}회 남음
      </div>
    </div>
  );
}

export default RenegoBtnView;

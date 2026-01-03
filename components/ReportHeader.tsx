import { colors } from "@/types/colors";


interface ReportHeaderProps {
  issueCount: number;
}

function ReportHeader({ issueCount }: ReportHeaderProps) {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}${String(
    today.getMonth() + 1
  ).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

  return (
    <div
      style={{
        width: '80%',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: 9,
              height: 18,
              position: 'absolute',
              left: 13.5,
              top: 9,
              outline: '2.4px solid #595959',
              outlineOffset: '-1.2px',
            }}
          />
        </div>

        <div
          style={{
            color: colors.black[800],
            fontSize: 20,
            fontFamily: 'Pretendard',
            fontWeight: 500,
            lineHeight: '32px',
          }}
        >
          {formattedDate} 계약서 검토
        </div>
      </div>

      {/* Main text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontFamily: 'Pretendard',
            fontWeight: 600,
            lineHeight: '32px',
          }}
        >
          <span>이 계약에서 </span>
          <span>이야기가 필요한 항목 </span>
          <span style={{ color: colors.secondary.red }}>{issueCount}</span>
          <span>개를<br />찾았어요.</span>
        </div>

        <div
          style={{
            color: colors.black[800],
            fontSize: 17,
            fontFamily: 'Pretendard',
            fontWeight: 500,
            lineHeight: '24px',
          }}
        >
          수정과 협의가 필요한 항목을 체크해
          <br />
          자동으로 클라이언트에게 보낼 문서를 만들어보세요.
        </div>
      </div>
    </div>
  );
}

export default ReportHeader;


import ContractsItemClient from "@/components/ContractsItemClient";
import MainBtn from "@/components/Button/MainBtn";
import RenegoBtnClient from "@/components/Button/RenegoBtnClient";
import UploadActionBtn from "@/components/Button/UploadActionBtn";
import RecentContractsItem from "@/components/RecentContractsItem";
import ReportHeader from "@/components/ReportHeader";
import ReportSummaryItem from "@/components/ReportSummaryItem";
import { ReportSummaryType } from "@/types/reportSummary";
import ReportIssueCard from "@/components/ReportIssueCard";
import SubscribeInfo from "@/components/SubscribeInfo";
import ContractsReviewBtn from "@/components/Button/ContractsReviewBtn";





export default function Home() {
  const remainCount = 3; // 서버에서 가져온 값이라고 가정
  const user = { plan: 'FREE' };
  const isFreeUser = user.plan === 'FREE';
  const LOCKED_TYPES_FOR_FREE: ReportSummaryType[] = [
    'ADJUST',
    'AMBIGUOUS',
  ];












  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 20 }}>
      <ContractsItemClient title="첫협상 20251109" />
      <MainBtn />
      <RenegoBtnClient remainCount={remainCount} />
      <UploadActionBtn label="카메라로 촬영하기" type="camera" />
      <UploadActionBtn label="사진 선택하기" type="photo" />
      <UploadActionBtn label="pdf 업로드하기" type="pdf" />

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 40, background: 'white', padding: 20, borderRadius: 8 }}>
        <div style={{ alignSelf: 'stretch', color: 'black', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word' }}>최근 검토한 계약서</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <RecentContractsItem
            date="251222"
            title="노트폴리오 UXUI 강의 계약서 내용이 길어지면 어떻게 될까요? 잘 모르겠네요..아아아아아아아ㅓ라어ㅏ런라ㅓ날너라너라너란어랑ㄴㄹㅇㄴㄹ.."
            remainingCount={3}
          />
          <RecentContractsItem
            date="251222"
            title="노트폴리오 UXUI 강의 계약서 내용이 길어지면.."
            remainingCount={3}
          />
          <RecentContractsItem
            date="251222"
            title="노트폴리오 UXUI 강의 계약서 내용이 길어지면.."
            remainingCount={3}
          />
        </div>
      </div>
      <ReportHeader issueCount={10} />
      <ReportSummaryItem type="BASELINE" count={1} />
      <ReportSummaryItem type="AMBIGUOUS" count={3} />
      <ReportSummaryItem type="MISSING" count={6} />
      <ReportSummaryItem
        type="ADJUST"
        count={6}
        isLocked={isFreeUser && LOCKED_TYPES_FOR_FREE.includes('ADJUST')}
      />

      {/* 여기서 너비를 우선 80%를 잡아둠 */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
        <ReportIssueCard
          issue={{
            id: 'issue-1',
            type: 'AMBIGUOUS',
            label: '수정 범위 불명확',
            title: '수정 횟수에 제한이 없다.',
            description:
              '현재 계약서에는 수정 횟수나 범위에 대한 기준이 없어\n추가 수정이 반복될 가능성이 있습니다.',
          }}
        />
        <ReportIssueCard
          issue={{
            id: 'issue-1',
            type: 'AMBIGUOUS',
            label: '수정 범위 불명확',
            title: '수정 횟수에 제한이 없다.',
            description:
              '현재 계약서에는 수정 횟수나 범위에 대한 기준이 없어\n추가 수정이 반복될 가능성이 있습니다.',
          }}
        />

        <SubscribeInfo
          remainingCount={2}
          purchaseHref="/purchase"
          subscribeHref="/subscribe"
        />
      </div>
      <ContractsReviewBtn href="/contracts/review" />

    </div>
  );
}

import { ReportSummaryType } from "./reportSummary";

export interface ReportIssue {
  id: string;
  type: ReportSummaryType;          // 서버에서 옴
  label: string;            // "수정 범위 불명확"
  title: string;            // "수정 횟수에 제한이 없다."
  description: string;      // 상세 설명
}


export const ISSUE_TYPE_CONFIG: Record<
  ReportSummaryType,
  {
    badgeText: string;
    badgeColor: string;
    borderColor: string;
    accentColor: string;
  }
> = {
  BASELINE: {
    badgeText: '🔍 기준 확인 필요',
    badgeColor: '#F8E1B7',
    borderColor: '#F8E1B7',
    accentColor: '#F0B429',
  },
  AMBIGUOUS: {
    badgeText: '⚡️ 해석 여지 있음',
    badgeColor: '#4670FF',
    borderColor: '#2B41A3',
    accentColor: '#2B41A3',
  },
  MISSING: {
    badgeText: '🗨 논의 필요',
    badgeColor: '#E6F4EA',
    borderColor: '#34A853',
    accentColor: '#34A853',
  },
  ADJUST: {
    badgeText: '🛡 협상 권장',
    badgeColor: '#E1ECFF',
    borderColor: '#4670FF',
    accentColor: '#4670FF',
  },
};

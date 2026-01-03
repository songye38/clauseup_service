export type ReportSectionType =
  | 'RIGHT_DUTY'
  | 'SCOPE_PAYMENT'
  | 'COPYRIGHT'
  | 'WORK_MATCHING'
  | 'OWNERSHIP'
  | 'TERM';



// 섹션
export const SECTION_CONFIG: Record<
  ReportSectionType,
  {
    title: string;
    lockable: boolean; // 무료에서 잠길 수 있는지
  }
> = {
  RIGHT_DUTY: {
    title: '권리·의무 명확성',
    lockable: false,
  },
  SCOPE_PAYMENT: {
    title: '업무 범위 / 대가',
    lockable: true,
  },
  COPYRIGHT: {
    title: '저작권 조항',
    lockable: true,
  },
  WORK_MATCHING: {
    title: '저작물–계약 매칭',
    lockable: true,
  },
  OWNERSHIP: {
    title: '권리 귀속 구조',
    lockable: true,
  },
  TERM: {
    title: '계약 기간 / 종료 후 권리',
    lockable: true,
  },
};

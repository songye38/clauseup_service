import { colors } from "./colors";


export type ReportSummaryType =
    | 'BASELINE'
    | 'AMBIGUOUS'
    | 'MISSING'
    | 'ADJUST';


// 요약
export const SUMMARY_CONFIG: Record<
    ReportSummaryType,
    {
        title: string;
        description: string;
        colors: {
            base: string;
            highlight: string;
        };
    }
> = {
    BASELINE: {
        title: '🔍 기준 확인 필요',
        description: '계약 진행 전 반드시 명확히 합의해야 하는 부분',
        colors: {
            base: colors.secondary.baseline.base,
            highlight: colors.secondary.baseline.highlight,
        },
    },
    AMBIGUOUS: {
        title: '⚡️ 해석 여지 있음',
        description: '문장이나 조항이 다르게 해석될 수 있는 부분',
        colors: {
            base: colors.secondary.ambiguous.base,
            highlight: colors.secondary.ambiguous.highlight,
        },
    },
    MISSING: {
        title: '🗨 논의 필요',
        description: '클라이언트와 논의가 필요한데 아직 확인되지 않은 부분',
        colors: {
            base: colors.secondary.missing.base,
            highlight: colors.secondary.missing.highlight,
        },
    },
    ADJUST: {
        title: '🛡 협상 권장',
        description: '계약서에서 조정 가능성이 있거나 불리할 수 있는 부분',
        colors: {
            base: colors.secondary.adjust.base,
            highlight: colors.secondary.adjust.highlight,
        },
    },
};



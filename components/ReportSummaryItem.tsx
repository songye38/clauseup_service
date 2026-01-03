import { ReportSummaryType, SUMMARY_CONFIG } from '../types/reportSummary';
import { icons } from '@/lib/icons';
import Image from 'next/image';

interface ReportSummaryItemProps {
    type: ReportSummaryType;
    count: number;
    isLocked?: boolean;
}

// const LOCKED_STYLE = {
//     background: '#D1DAF9',
//     text: '#8C8C8C',
//     icon: '#8C8C8C',
// };

function ReportSummaryItem({
    type,
    count,
    isLocked = false,
}: ReportSummaryItemProps) {
    const config = SUMMARY_CONFIG[type];

    //   const backgroundColor = isLocked
    //     ? LOCKED_STYLE.background
    //     : config.colors.base;

    //   const titleColor = isLocked
    //     ? LOCKED_STYLE.text
    //     : config.colors.highlight;

    return (
        <div
            style={{
                alignSelf: 'stretch',
                padding: '14px 20px',
                background: config.colors.base,
                borderRadius: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
            }}
        >
            {/* Text */}
            <div
                style={{
                    flex: 1,
                    display: 'inline-flex',
                    flexDirection: 'column',
                    gap: 6,
                }}
            >
                <div
                    style={{
                        fontSize: 15,
                        fontFamily: 'Pretendard',
                        fontWeight: 600,
                        color: 'black',
                    }}
                >
                    {config.title}
                </div>

                <div
                    style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#595959',
                    }}
                >
                    {config.description}
                </div>
            </div>

            {/* Lock Icon */}
            {isLocked && (
                <Image src={icons.lockPale} alt={'alt'} width='28' height='28' />
            )}

            {/* Count */}
            <div
                style={{
                    width: 'auto',
                    // padding: 10,
                    display: 'inline-flex',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: isLocked ? '#8C8C8C' : 'black',
                    }}
                >
                    {count}개
                </div>
            </div>
        </div>
    );
}


export default ReportSummaryItem;

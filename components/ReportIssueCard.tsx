
import { ReportIssue, ISSUE_TYPE_CONFIG } from "@/types/reportIssue";
import Image from "next/image";
import { icons } from "@/lib/icons";



interface ReportIssueCardProps {
    issue: ReportIssue;
}

function ReportIssueCard({ issue }: ReportIssueCardProps) {
    const { type, label, title, description } = issue;
    const config = ISSUE_TYPE_CONFIG[type];

    return (
        <div
            style={{
                width: 'auto',
                padding: '20px 20px 24px',
                background: 'white',
                borderRadius: 8,
                outline: `2px ${config.borderColor} solid`,
                outlineOffset: '-2px',
                display: 'inline-flex',
                flexDirection: 'column',
                gap: 14,
            }}
        >
            {/* Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                    <div style={{ flex: '1 1 0' }} />

                    {/* Accent Icon */}
                    {/* <div style={{ width: 24, height: 24, position: 'relative' }}>
                        <div
                            style={{
                                width: 20,
                                height: 20,
                                position: 'absolute',
                                left: 2,
                                top: 2,
                                background: config.accentColor,
                                outline: '1.6px white solid',
                                outlineOffset: '-0.8px',
                            }}
                        />
                    </div> */}
                    <Image src={icons.add} alt={'alt'} width='24' height='24' />
                </div>

                {/* Label + Title */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div
                        style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: '#8C8C8C',
                            fontFamily: 'Pretendard',
                        }}
                    >
                        {label}
                    </div>

                    <div
                        style={{
                            fontSize: 18,
                            fontWeight: 600,
                            color: '#000',
                            fontFamily: 'Pretendard',
                        }}
                    >
                        {title}
                    </div>
                </div>
            </div>

            {/* Description + Badge */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div
                    style={{
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: '19px',
                        color: '#595959',
                        fontFamily: 'Pretendard',
                        whiteSpace: 'pre-line',
                    }}
                >
                    {description}
                </div>

                <div
                    style={{
                        alignSelf: 'flex-start',
                        width: 'auto',
                        padding: '4px 8px',
                        background: config.badgeColor,
                        borderRadius: 4,
                        display: 'inline-flex',
                        alignItems: 'center',
                    }}
                >
                    <span
                        style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#fff',
                            fontFamily: 'Pretendard',
                        }}
                    >
                        {config.badgeText}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ReportIssueCard;

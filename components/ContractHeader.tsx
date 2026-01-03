import React from 'react';

interface ContractHeaderProps {
  date: string;
  title: string;
}

function ContractHeader({ date, title }: ContractHeaderProps) {
  return (
    <div
      style={{
        alignSelf: 'stretch',
        paddingBottom: 12,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 22,
      }}
    >
      <div
        style={{
          flex: '1 1 0',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            flex: '1 1 0',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 4,
          }}
        >
          <div
            style={{
              alignSelf: 'stretch',
              color: '#8C8C8C',
              fontSize: 13,
              fontFamily: 'Pretendard',
              fontWeight: 600,
            }}
          >
            {date}
          </div>

          <div
            style={{
              alignSelf: 'stretch',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                color: '#000',
                fontSize: 20,
                fontFamily: 'Pretendard',
                fontWeight: 600,
                wordWrap: 'break-word',
              }}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractHeader;

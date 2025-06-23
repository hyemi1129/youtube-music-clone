import React from 'react'

const buttonStyle = {
  padding: '12px 0',
  backgroundColor: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'normal',
  cursor: 'pointer',
  textAlign: 'center',
  borderRadius: '20px',
  transition: 'background-color 0.3s',
}

const categoryList = [
  '팟캐스트',
  '잠잘 때',
  '휴식',
  '에너지 충전',
  '행복한 기분',
  '슬픔',
  '로맨스',
  '운동',
  '집중',
  '출퇴근길',
  '파티',
]

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(to bottom, #20323A, #000000)',
        margin: 0,
        padding: 0,
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      {/* 사이드바 */}
      <div
        style={{
          width: '200px',
          height: '100vh',
          backgroundColor: 'black',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingTop: '20px',
          paddingBottom: '40px',
          paddingLeft: '10px',
        }}
      >
        {/* 햄버거 버튼 */}
        <div
          style={{
            width: '24px',
            height: '18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
            marginBottom: '30px',
            marginLeft: 0,
          }}
        >
          <div style={{ height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          <div style={{ height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></div>
          <div style={{ height: '3px', backgroundColor: 'white', borderRadius: '2px' }}></div>
        </div>

        <button style={{ ...buttonStyle, width: '170px' }}>홈</button>
        <button style={{ ...buttonStyle, width: '170px' }}>둘러보기</button>
        <button style={{ ...buttonStyle, width: '170px' }}>보관함</button>

        <div
          style={{
            width: '180px',
            height: '1px',
            backgroundColor: 'white',
            marginTop: '10px',
            opacity: 0.3,
            alignSelf: 'center',
          }}
        ></div>

        <div
          style={{
            width: '170px',
            marginTop: '15px',
            padding: '12px 0',
            borderRadius: '12px',
            backgroundColor: 'rgba(128,128,128,0.3)',
            color: 'white',
            textAlign: 'center',
            fontWeight: '600',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          + 새 재생목록
        </div>

        <button
          style={{
            ...buttonStyle,
            width: '170px',
            marginTop: '15px',
            backgroundColor: 'black',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'normal',
            fontSize: '15px',
            cursor: 'pointer',
            padding: '8px 0',
          }}
        >
          좋아요 표시한 음악
        </button>
      </div>

      {/* 검색창과 카테고리 버튼 */}
      <div
        style={{
          marginLeft: '240px', // 사이드바 + 약간 오른쪽
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          zIndex: 15,
          position: 'fixed',
          top: '20px',
          left: 0,
          right: 0,
        }}
      >
        <input
          type="text"
          placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
          style={{
            width: '300px',
            padding: '10px 25px',
            borderRadius: '9px',
            border: 'none',
            fontSize: '17px',
            backgroundColor: 'rgba(136,136,136,0.3)', // 더 투명하게
            color: '#555555', // 진한 회색
            outline: 'none',
            marginBottom: '20px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {categoryList.map((item, index) => (
            <button
              key={index}
              style={{
                padding: '6px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

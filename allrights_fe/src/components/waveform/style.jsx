import styled from "styled-components";

export const WaveBox = styled.div`
  display: block;
  border: 1px solid red;
  width: 45%;

  align-items: center; /* 수직 가운데 정렬 */
  justify-content: space-between; /* 자식 요소 사이에 여백을 넣어 수평으로 정렬 */
`;

export const AudioWaveformContainer = styled.div`
  flex-direction: row;
  /* 더 이상 display 속성을 설정할 필요가 없습니다. */
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  border: 1px solid yellow;
  /* 더 이상 display 속성을 설정할 필요가 없습니다. */
`;

// 나머지 컴포넌트와 스타일을 정의

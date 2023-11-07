import styled from "styled-components";

export const MusicBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
`;

export const MusicSource = styled.div`
  display: flex;
  flex-direction: row;
  width: 67vw;
  height: 7vh;
  border-radius: 24px;
  background: #4e535d;
  padding: 15px;
  align-items: center;
  svg {
    color: #727782;
    margin-right: 20px;
    font-size: 24px;
  }
`;

export const AlbumCover = styled.div`
  display: flex;
  border-radius: 9px;
  background: #727782;
  width: 44px;
  height: 44px;
  margin-right: 20px;
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 13vw;
  height: 5vh;
  /* border: 1px solid yellow; */
  margin-right: 10px;
  justify-content: center;
`;

export const MusicTitle = styled.div`
  display: flex;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  color: #bfc5d0;
  /* border: 1px solid red; */
`;

export const MusicOwner = styled.div`
  display: flex;
  font-size: 0.6%;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  color: #bfc5d0;
`;

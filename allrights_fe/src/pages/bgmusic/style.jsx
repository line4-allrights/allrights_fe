import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 67vw;
  height: 5vh;
  flex-shrink: 0;
  padding: 10px;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  margin-right: 28px;
  outline: none;
  color: #e4e8ef;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  padding: 10px 24px;
  height: 5vh;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 36px;
  background: #4a88ff;
  color: #e4e8ef;
  cursor: pointer;
`;

export const BgMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #727782;
  justify-content: center;
`;

export const BgMenubar = styled.div`
  display: flex;
  position: relative;
  width: 67vw;
  margin-top: 64px;
  justify-content: space-between;
  color: #e4e8ef;
  top: -8px;
  /* border: 3px solid yellow; */
`;

export const BgMenu = styled.div`
  color: #9da5b3;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
`;

export const BgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 78vw;
  margin-bottom: 104px;
  border: 1px solid red;
`;

export const BgIntro = styled.div`
  display: flex;
  /* flex-direction: column; */
  color: #e4e8ef;
  font-size: 2vw;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1.4px;
  margin-top: 104px;
`;

export const BgIntro2 = styled.div`
  color: #bfc5d0;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubscribeButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  margin-top: 40px;
  /* padding: 10px 24px; */
  justify-content: center;
  align-items: center;
  width: 6vw;
  height: 4vh;
  gap: 10px;
  border-radius: 36px;
  color: #e4e8ef;
  background: #4a88ff;
  font-size: 1vw;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.03px;
`;

export const BgMusicBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 120px;
  justify-content: space-between;
  margin-bottom: 30px;
  /* border: 1px solid red; */
`;

export const BgTitle = styled.div`
  color: #e4e8ef;
  font-size: 2vw;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: -1.4px;
`;

export const BgSubTitle = styled.div`
  color: #e4e8ef;
  display: flex;
  gap: 8px;
  font-size: 1vw;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.8px;
  align-items: flex-end;
  margin-bottom: 3px;
  svg {
    margin-bottom: 5px;
  }
`;

import styled from "styled-components";

export const FooterWrapper = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  height: 27vh;
  width: 100%;
  background-color: #9da5b3;
  opacity: 0.68;
  align-content: space-between;
  justify-content: center;
  /* border: 3px solid red; */
  padding-bottom: 30px;
`;

export const FooterContainer = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  height: 27vh;
  width: 95%;
  background-color: #9da5b3;
  opacity: 0.6;
  align-content: space-between;
  justify-content: space-between;
  /* border: 3px solid white; */
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
`;

export const FooterMainLogo = styled.img`
  display: flex;
  margin-left: 20px;
  margin-top: 25px;

  width: 40%;
  /* border: 3px solid red; */
`;

export const FooterCopyRight = styled.div`
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  margin-top: 2px;
  position: relative;
  margin-left: 20px;
`;

export const FooterRight = styled.div`
  display: flex;
  margin-right: 67px;
  margin-top: 25px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-end;
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterSort = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 22px;
  width: 164px;
  /* border: 3px solid yellow; */
`;

export const FooterSortDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #727782;
  font-weight: normal;
  font-size: 0.8vw;
  gap: 200px;
  /* border: 3px solid purple; */
`;

export const FooterDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-around;
  margin-top: 10px;
  width: 175px;
  /* border: 1px solid yellow; */
`;

export const FooterDetailMenu = styled.div`
  display: flex;
  flex-direction: column;
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  margin-top: 8px;
  position: relative;
`;

export const FooterDetailMenu2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterCopyRight2 = styled.div`
  margin-top: 8px;
  position: relative;
  margin-left: 40px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  bottom: -33px;
  /* border: 3px solid red; */
`;
export const CopyRight = styled.div`
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  position: relative;
  margin-left: 40px;
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  /* border: 3px solid red; */
`;

export const FooterLogo = styled.div`
  margin-top: 15px;
  margin-left: 20px;
  align-items: center;
  display: flex;
`;

export const FooterInsta = styled.img`
  width: 30%;
`;

export const FooterGithub = styled.img`
  width: 30%;
  position: relative;
  right: 30px;
`;

//fonts
export const NotoSans = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

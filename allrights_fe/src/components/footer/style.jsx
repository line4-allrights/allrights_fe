import styled from "styled-components";

export const FooterWrapper = styled.div`
  /* 푸터를 화면 아래쪽에 고정 */
  bottom: 0; /* 화면 하단에 고정 */
  left: 0; /* 왼쪽에 고정 (가운데로 정렬하려면 left: 50%; transform: translateX(-50%); 사용 가능) */
  display: flex;
  flex-direction: column;
  height: 27vh;
  width: 100%;
  padding: 20px 120px 20px 120px;
  justify-content: center;
  background-color: #9da5b3;
  opacity: 0.6;
  /* border: 3px solid red; */
`;

export const FooterMainLogo = styled.img`
  display: flex;
  margin-left: 20px;
  margin-top: 25px;

  width: 6%;
  /* border: 3px solid red; */
`;

export const FooterCopyRight = styled.div`
  color: #727782;
  font-weight: lighter;
  font-size: 0.7vw;
  margin-top: 8px;
  position: relative;
  margin-left: 20px;
`;

export const FooterLogo = styled.div`
  margin-left: 15vw;
  margin-top: 3vh;
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

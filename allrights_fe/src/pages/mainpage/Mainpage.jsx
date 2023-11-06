import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import MainButton from "../../components/button/button-main";
import AllrightsHome from "../../assets/images/Allrights_home.png";
import SoundWave1 from "../../assets/images/soundWave1.png";
import SoundWave2 from "../../assets/images/soundWave2.png";
import SoundWave3 from "../../assets/images/soundWave3.png";

const HomeContainer = styled.div`
  width: 58%;
`

const HomeP = styled.p`
  font-weight: 700;
  font-size: 1.7vw;
  color: ${colors.white}
`

const Mainpage = () => {
  return (
    <HomeContainer>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div className="homeLeft" style={{width: "43%", display: "flex", flexDirection: "column", gap: "1.2vw"}}>
          <HomeP>효과음부터 배경음악까지</HomeP>
          <div style={{display: "flex", gap: "0.6vw", justifyContent: "flex-end"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <img src = {AllrightsHome} style={{width: "10vw"}}/>
              <div style={{width: "10vw", height: "0.1vw", backgroundColor: colors.mainBlue}}/>
            </div>
            <HomeP>로 완성</HomeP>
          </div>
          <HomeP style={{fontSize: "1vw", fontWeight: 400, lineHeight: "1.5vw"}}>
            다양한 효과음 및 배경음악을 다운로드하고<br/>
            저작권 걱정 없이 영상을 제작해보세요!
          </HomeP>
          <div style={{display: "flex", gap: "1vw"}}>
            <MainButton buttonText="바로 시작하기"/>
            <MainButton buttonText="이용 가이드" style={{backgroundColor: "transparent", border: `0.1vw solid ${colors.mainBlue}`}}/>
          </div>
        </div>

        <div className="homeRight" style={{width: "45%", display: "flex", flexDirection: "column", gap: "1.4vw", paddingTop: "0.8rem"}}>
          <img src={SoundWave1} style={{width: "21.2vw", margin: "0 auto"}}/>
          <img src={SoundWave2} style={{width: "21.2vw", marginLeft: "0"}}/>
          <img src={SoundWave3} style={{width: "21.2vw", marginLeft: "auto"}}/>
        </div>
      </div>
    </HomeContainer>
  )
};

export default Mainpage;

import React from "react";
import * as S from "./style";
import insta from "../../assets/images/footer_insta.png";
import github from "../../assets/images/footer_github.png";
import logo from "../../assets/images/AllRights.png";

function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterMainLogo src={logo} alt="logo" />
      <S.FooterCopyRight>
        우리는 당신의 모든 창작 활동과 함께 합니다.<br></br> 쉽고 빠르게 자료를
        다운로드하고,<br></br> 당신의 작품을 공유해 보세요.
      </S.FooterCopyRight>
      <S.FooterCopyRight>All Rights reserved by you.</S.FooterCopyRight>
      <S.FooterLogo>
        <a
          href="https://www.instagram.com/line4thon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.FooterInsta src={insta} alt="Instagram" />
        </a>
        <a
          href="https://github.com/line4-allrights"
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.FooterGithub src={github} alt="GitHub" />
        </a>
      </S.FooterLogo>
    </S.FooterWrapper>
  );
}

export default Footer;

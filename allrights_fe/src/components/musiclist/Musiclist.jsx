import React, { useState } from "react";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Waveform from "../waveform/Wavefrom";
import AudioWaveform from "../waveform/Wavefrom";

const Musiclist = () => {
  return (
    <>
      <S.MusicBox>
        <S.MusicSource>
          <FontAwesomeIcon icon={faHeart} />
          <S.AlbumCover />
          <S.MusicInfo>
            <S.MusicTitle>4호선톤 파이팅</S.MusicTitle>
            <S.MusicOwner>아프지마 도토 잠보</S.MusicOwner>
          </S.MusicInfo>
          <AudioWaveform />
        </S.MusicSource>
      </S.MusicBox>
    </>
  );
};

export default Musiclist;

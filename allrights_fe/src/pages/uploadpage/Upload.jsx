import * as React from "react";
import color from "../../styles/colors";
import styled from "styled-components";
import BrowseButton from "../../components/button/button-main";
const Home = styled.div`
    
    width:40%;
`

const HomeContainer = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
`

const UploadP = styled.p`
margin-top:2vw;
  color:${color.white};
font-size: 1.5vw;
font-weight: 700;
line-height: 150%;
margin-bottom:1vw;
`

const UploadInput = styled.input`
  height: 2.2vw;
  padding: 1vw;
  border-radius: 36px;
  border: 2px solid #bfc5d0;
  outline: none;
  color: #e4e8ef;
  
  /* border: 1px solid red; */
`;


const UploadContainer = styled.div`
  display: flex;
  align-items: center;
`

const SearchButton = styled.button`
  width: 7.4vw;
  height: 2.5vw;
  padding: 0.5vw 1.2vw;
  background-color: ${color.mainDarkBlue};
  border-radius: 1.8vw;
  font-size: 0.8vw;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e4e8ef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid #4A88FF;

  &:hover {
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  width: 5.5vw;
  height: 2.5vw;
  padding: 0.5vw 1.2vw;
  background-color: #4A88FF;
  border-radius: 1.8vw;
  font-size: 0.8vw;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #e4e8ef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 2px solid #4A88FF;

  &:hover {
    cursor: pointer;
  }
`

const ButtonContainer = styled.div`
  display:flex;
  margin-top:2vw;
  flex-direction: row;
  gap:2vw;
`


const Upload = () => {
  return (
    <Home>
      <HomeContainer>
        <UploadP>Record Title *</UploadP>
        <UploadInput placeholder="타이틀을 입력해주세요"/>

        
        <UploadP>Upload File *</UploadP>
        <UploadContainer>
        <UploadInput placeholder="타이틀을 입력해주세요" style={{width:"23.6vw"}}/>
        <SearchButton style={{marginLeft:"1vw", marginRight:"3vw"}}>Browse File</SearchButton>
        <SubmitButton>Submit</SubmitButton>
        </UploadContainer>

        <ButtonContainer>
        <SearchButton>효과음</SearchButton>
        <SearchButton>베경음악</SearchButton>
        </ButtonContainer>

        <UploadP>Genre *</UploadP>
        <UploadInput placeholder="유형을 선택해주세요" style={{width:"17.53vw"}}/>


      </HomeContainer>
    </Home>
  )
};

export default Upload;

import styled from "styled-components";
import colors from "../../styles/colors";
import EditInput from "../../components/input/input-sign";
import EditButton from "../../components/button/button-main";

const EditPassword = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const EditP = styled.p`
    font-weight: 700;
    font-size: 1.75vw;
    color: ${colors.white};
`

const Edit = () => {
    return (
        <EditPassword>
            <EditP>비밀번호 변경</EditP>
            <div style={{display: "flex", flexDirection: "column", marginTop: "6vw", gap: "1.2vw"}}>
                <EditInput type="password" placeholder="기존의 비밀번호를 입력해주세요"/>
                <EditInput type="password" placeholder="새로운 비밀번호를 입력해주세요"/>
                <EditInput type="password" placeholder="새로운 비밀번호를 다시 입력해주세요"/>
            </div>
            <EditButton buttonText="완료" style={{width: "11.7vw", marginTop: "3.4vw"}}/>
        </EditPassword>
    )
}

export default Edit
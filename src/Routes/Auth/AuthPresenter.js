import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/input";

const Wrapper = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction:column;
`

const Box = styled.div`
    ${props => props.theme.whiteBox}
    border-radius:0px;
    width: 100%;
    max-width: 350px;
`

const StateChanger = styled(Box)`
    text-align:center;
    padding:20px 0px;
`

const Link = styled.span`
    color: ${props => props.theme.blueColor};
    cursor: pointer;
`

const Form = styled(Box)`
    padding: 40px;
    padding-bottom: 30px;
    margin-bottom: 15px;
    form {
        input{
            width:100%;
            margin-bottom:10px;
        }
        button{
            margin-top:5px;
        }
    }
`;

export default ({
    setAction,
    action,
    userid,
    username,
    email,
    onSubmit,
    secret
}) =>(
    <Wrapper>
        <Form>
            {action === "logIn" && (
                <>
                <Helmet>
                    <title>Log In | Nodegram</title>
                </Helmet>
                <form onSubmit = {onSubmit}>
                    <Input placeholder={"이메일 주소"} value = {email.value} onChange = {email.onChange}/>
                    <Button text={"로그인"}/>
                </form>
                </>
                )
            }
            {action === "signUp" && (
                <>
                <Helmet><title>Sign Up | Nodegram</title></Helmet>
                <form onSubmit = {onSubmit}>
                    <Input placeholder={"이메일 주소"} value = {email.value} onChange = {email.onChange} type="email"/>
                    <Input placeholder={"성명"} value = {username.value} onChange = {username.onChange}/>
                    <Input placeholder={"사용자 이름"} value = {userid.value} onChange = {userid.onChange}/>
                    <Button text={"가입"}/>
                </form>
                </>
                )
            }
            {action === "confirm" &&(
                <>
                <Helmet>
                    <title>Confirm | Nodegram</title>
                </Helmet>
                <form onSubmit = {onSubmit}>
                <Input placeholder={"인증 코드"} value = {email.value} onChange = {email.onChange} required/>
                <Button text={"확인"}/>
            </form>
            </>
            )}
        </Form>
        <StateChanger>
            {action === "logIn" 
            ?(<>계정이 없으신가요? <Link onClick={() => setAction("signUp")}>가입하기</Link></>)
            :(<>계정이 있으신가요? <Link onClick={() => setAction("logIn")}>로그인</Link></>)}
        </StateChanger>
    </Wrapper>
);
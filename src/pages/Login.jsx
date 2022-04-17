import React, { useState } from 'react'
import styled from 'styled-components';
import Annoucements from '../components/Annoucements';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../responsive';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
const Container = styled.div`
height: calc(100vh - 90px);
display:flex;
background-color:#fcf5f5;
${mobile({
    height: 'calc(100vh - 80px)',
    backgroundColor: '#E9EBEE'
})}

`;
const Left = styled.div`
flex:1;
width:100%;
display:flex;
align-items:center;
justify-content:center;
${mobile({
    // flexDirection:'column'
    display: 'none'
    // margin:'0px'
})}
`
const Image = styled.img`

width:70%;
margin-left:-20%;
object-fit:cover;
`
const Desc = styled.h2`
font-size:40px;
color:teal;
font-weight:600;
margin-left:-15%;
`
const Right = styled.div`
flex:1;

`
const RightWrapper = styled.div`
margin:10% 20% 20% 20%;
height:70vh;
background-color:white;
border:1px solid #C0C0C0;
border-radius:20px; 
${mobile({
    height: '60vh',
    margin: '20% 5%'
})}
`
const Form = styled.form`
`
const RightTop = styled.div`
text-align:center;
padding-top:20px;

`
const RightBottom = styled.div`
margin:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title = styled.h1`
color:#E6E6FA;
font-weight:600;

`
const Inputs = styled.div`
margin:10px;
`
const InputName = styled.span`
font-weight:400;
`
const Input = styled.div`
width:100%;
height:40px;
border-radius:2px;
border:1px solid teal;
// background-color:yellow;
display:flex;
align-items:center;
justify-content:space-between;
`
const InputField = styled.input`
border:none;
padding:10px;
&:focus{
    outline:none;
}

`
const Button = styled.button`
margin-top:10px;
padding:10px;
border:1px solid #C0C0C0;
background-color:lightpurple;
border-radius:10px;
cursor:pointer;
font-size:auto;
font-weight:bold;
&:hover{
    background-color:#B0E0E6;
};
margin-bottom:20px;
&:disabled{
    cursor: not-allowed
    color:#B0E0E6
}
`
const Account = styled.span`
font-size:10px;
text-align:center;
font-weight:100;
margin-left:35%;
${mobile({
    // marginLeft:'25%'

})}

`
const Error=styled.span`
color:red;
`
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const {isFetching,error} = useSelector(state=>state.user);
    const loginEvent = (e) => {
        e.preventDefault();
        let user = {
            email,
            password
        }
        login(dispatch,user,navigate);
    }
    return (
        <>
            <Navbar />
            <Annoucements />
            <Container>
                <Left>
                    <Image src='/assets/img/products/loginlogo1.png' />
                    <Desc>Always in style!</Desc>
                </Left>
                <Right>
                    <RightWrapper>
                        <Form >
                            <RightTop>
                                <Title>Login</Title>
                            </RightTop>
                            <RightBottom>
                                <Inputs>
                                    <InputName>Email</InputName>
                                    <Input>
                                        <InputField  placeholder='Enter Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                                    </Input>
                                </Inputs>
                                <Inputs>
                                    <InputName>Password</InputName>
                                    <Input>
                                        <InputField placeholder='Enter Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                                    </Input>
                                </Inputs>
                                <Button type='submit' onClick={loginEvent}>{isFetching? <CircularProgress size="1rem" color="secondary" /> : 'Login'}</Button>
                                { error && <Error>Something went wrong!</Error>}
                            </RightBottom>
                        </Form>
                        <Link to='/register' style={{ color: 'black' }}><Account>Not have an Account?</Account></Link>
                    </RightWrapper>
                </Right>
            </Container>
            {/* <NewsLetter /> */}
        </>

    )
}

export default Login
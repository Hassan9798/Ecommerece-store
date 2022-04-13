import React from 'react'
import styled from 'styled-components';
import {Send} from '@mui/icons-material';
import {mobile} from '../responsive';
function NewsLetter() {
    const Container=styled.div`
    height:60vh;
    background-color:#fcf5f5;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `
    const Title=styled.h1`
    font-size:70px;
    font-weight:bold;
    ${mobile({
     fontSize:'50px'
      })}
    `
    const Desc=styled.div`
    font-size:18px;
    font-weight:300;
    ${mobile({
      fontSize:'12px'
       })}
    `
    const Input=styled.div`
    margin:30px;
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({
      marginLeft:'0px'
       })}
    `
    const InputField=styled.input`
    flex:8;
    border:none;
    padding-left:20px;
    &:focus {
        outline:none;
    }
    `
    const Icon =styled.button`
    height:100%;
    flex:1;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
    
    `
    const Author=styled.span`
    font-size:15px;
    font-weight:100;
    `

  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favourite Products.</Desc>
        <Input>
        <InputField placeholder='Input Email'/>
        <Icon><Send/></Icon>
        </Input>
        <Author>Copyrights: <b>Hassan Khan</b></Author>
    </Container>
  )
}

export default NewsLetter
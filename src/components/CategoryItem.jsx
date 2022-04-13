// import { Title } from '@mui/icons-material';
// import { Button } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
    background-color:#FAEBD7;
};
${mobile({
    width:'100%'
    })}

`
const Img=styled.img`
height:100%;
width:100%;
object-fit:contain;
${mobile({
    height:'50vh',
    })}
`
const Info=styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;;
// margin:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title=styled.h1`
color:#FF7F50;
margin-bottom:20px
font-weight:500;

`
const Button =styled.button`
border:none;
width:80px;
height:30px;
background-color:#FFEFD5;
color:black;
border-radius:25%;
cursor:pointer;
font-weight:800;

`
function CategoryItem({ item }) {
    return (
        <Container>
            <Img src={item.img}/>
            <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
            </Info>


        </Container>
    )
}

export default CategoryItem
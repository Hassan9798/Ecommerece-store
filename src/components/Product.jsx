import React from 'react'
import styled from 'styled-components';
import {ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from '@mui/icons-material';
function Product() {
    const Info=styled.div`
    opacity:0;
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:3;
    background-color:rgb(0,0,0,0.2);
    display:flex;
    align-items:center;
    justify-content:center;
    transition:all 0.5s ease;
    cursor:pointer;

    `
    const Container=styled.div`
    flex:1;
    // height:50vh;
    // width:350px;
    margin:5px;
    min-width:280px;
    height:350px;
    // background-color:yellow;
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover ${Info}{
        opacity:1;

    }

    `
    const Img=styled.img`
    height:80%;
    width:80%;
    background-color:white;
    z-index:2;
    
    `
    
    const Icon=styled.div`
    height:40px;
    width:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition:all 0.5s ease;
    &:hover{
        background-color:#e9F5F5;
        transform:scale(1.2);
    }
    `
  return (
    <Container>
        <Img src='/assets/img/products/hoodie.png'/>
        <Info>
            <Icon><SearchOutlined/></Icon>
            <Icon><ShoppingCartOutlined/></Icon>
            <Icon><FavoriteBorderOutlined/></Icon>

        </Info>
    </Container>
  )
}

export default Product
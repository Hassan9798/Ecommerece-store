import React from 'react'
import styled from 'styled-components';
import {ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined, Co2Sharp} from '@mui/icons-material';
import { Link } from 'react-router-dom';
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
    width:100%;
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
function Product({product}) {
  return (
    <Container>
        <Img src={product.img}/>
        <Info>
        <Link to={`/product/${product._id}`}>
            <Icon>
                <SearchOutlined style={{textDecoration:'none',color:'black'}}/>
                </Icon>
                </Link>
            <Icon><ShoppingCartOutlined/></Icon>
            <Icon><FavoriteBorderOutlined/></Icon>

        </Info>
    </Container>
  )
}

export default Product
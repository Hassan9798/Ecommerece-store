import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import { Add, Remove } from '@mui/icons-material';
function Cart() {
    const Container=styled.div`
    `
    const Wrapper=styled.div`
    padding:20px;
    
    `
    const Title=styled.h1`
    font-weight:300;
    text-align:center;

    `
    const Top=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    `
    const TopButton=styled.button`
    padding:10px;
    font-weight:600;
    border: ${props=>props.type === 'filled' && 'none'};
    background-color: ${props=>props.type === 'filled'? 'black':'transparent'};
    color: ${props=>props.type === 'filled' && 'white'};
    cursor:pointer;

    `
    const TopTexts=styled.div`
    
    `
    const TopText=styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
    `
    const Bottom=styled.div`
    display:flex;
    justify-content:space-between;
    `
    const Info=styled.div`
    flex:3;
    `
    const Summary=styled.div`
    flex:1;
    height:50vh;
    border:1px solid lightgray;
    border-radius:10px;
    padding:20px;
    `
    const SummaryTitle=styled.div`
    font-weight:200;
    `
    const SummaryItem=styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === 'total' && '500'};
    font-size:${props=>props.type === 'total' && '24px'};

    
    `
    const SummaryItemText=styled.div`
    
    `
    const SummaryItemPrice=styled.div`
    
    `
    const Button=styled.button`
    padding:10px;
    width:100%;
    background-color:#333;
    color:white;
    border:none;
    font-weight:600;
    cursor:pointer;
    `
    const Product=styled.div`
  display:flex;
  justify-content:space-between;
    `
    const ProductDetail=styled.div`
  flex:2;
  display:flex;
    `
    const Image=styled.img`
  width:200px;
    `
    const Details=styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
  
    `
    const ProductName=styled.span`
  
    `
    const ProductId=styled.span`
  
    `
    const ProductSize=styled.span`
  
    `
    const ProductColor=styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color};
    `
    const PriceDetail=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    `
    const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    `
    const ProductAmount=styled.div`
    font-size:24px;
    font-weight:bold;
    margin:5px;
    `
    const ProductPrice=styled.div`
    font-size:24px;
    font-weight:200;
    `
    const Hr=styled.hr`
    background-color:#eee;
    height:1px;
    border:none;
    `
  return (
    <Container>
        <Navbar/>
        <Annoucements/>
        <Wrapper>
            <Title>Your Cart</Title>
            <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Cart(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>

            </TopTexts>
            <TopButton type='filled'>CheckOut</TopButton>

            </Top>
            <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src='/assets/img/products/hoodie.png'/>
                        <Details>
                            <ProductName><b>PRODUCT:</b>Hoodie</ProductName>
                            <ProductId><b>ID:</b>92125485558</ProductId>
                            <ProductColor color='black'/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>2</ProductAmount>
                           <Remove/>
                       </ProductAmountContainer>
                       <ProductPrice>2000 PKR</ProductPrice>
                    </PriceDetail>

                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src='/assets/img/products/tshir2.png'/>
                        <Details>
                            <ProductName><b>PRODUCT:</b>T-shirt</ProductName>
                            <ProductId><b>ID:</b>92125485558</ProductId>
                            <ProductColor color='gray'/>
                            <ProductSize><b>Size:</b>M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                       <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>1</ProductAmount>
                           <Remove/>
                       </ProductAmountContainer>
                       <ProductPrice>1500 PKR</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle></SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Sub Total</SummaryItemText>
                    <SummaryItemPrice>3500 PKR</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type='total'>
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>3500 PKR</SummaryItemPrice>
                </SummaryItem>
                <Button>CheckOut Now</Button>
            </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart
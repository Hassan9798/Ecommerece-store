import React ,{useEffect, useState} from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import { Add, Remove, SystemSecurityUpdate } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest,publicRequest } from '../makeRequest';
import axios from 'axios';
const Container = styled.div`
`
const Wrapper = styled.div`
padding:20px;

`
const Title = styled.h1`
font-weight:300;
text-align:center;

`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
border: ${props => props.type === 'filled' && 'none'};
background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
color: ${props => props.type === 'filled' && 'white'};
cursor:pointer;

`
const TopTexts = styled.div`

`
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
`
const Info = styled.div`
flex:3;
margin-top:10px;
`
const Summary = styled.div`
flex:1;
height:50vh;
border:1px solid lightgray;
border-radius:10px;
padding:20px;
`
const SummaryTitle = styled.div`
text-align:center;
font-size:20px;
font-weight:400;
`
const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${props => props.type === 'total' && '500'};
font-size:${props => props.type === 'total' && '24px'};


`
const SummaryItemText = styled.div`

`
const SummaryItemPrice = styled.div`

`
const Button = styled.button`
padding:10px;
width:100%;
background-color:#333;
color:white;
border:none;
font-weight:600;
cursor:pointer;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
object-fit:contain;
height:200px;
width:200px;
`
const Details = styled.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductSize = styled.span`

`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props => props.color};
`
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const ProductAmount = styled.div`
font-size:24px;
font-weight:bold;
margin:5px;
`
const ProductPrice = styled.div`
font-size:24px;
font-weight:200;
`
const Hr = styled.hr`
background-color:#eee;
margin-top:5px;
height:1px;
border:none;
`
function Cart() {
    const cart = useSelector(state => state.cart)
    const stripeKey="pk_test_51KocEsGzXR7JjkBpkPwXlIG54yeS1pSprpg3ZnjDkmmZntARNSv00XeZFaaypP0lolaSBob6UuutrHearlBa6d5f00lBLJ0Etz"
    const [stripeToken,setStripeToken]=useState(null);
    const [amount,setAmount]=useState((cart.total && cart.total / 181.85) * 100);
    const onToken=(token)=>{
        setStripeToken(token);
        }
    useEffect(()=>{

        const makeRequest=async()=>{
            const res= await userRequest.post('/stripe/payment',
            {
                tokenId:stripeToken.id,
                amount:Math.round(amount)
            }
            )
            console.log(res.data);
        };
       stripeToken && makeRequest();
    },[stripeToken,cart.total])
    console.log(amount)
    return (
        <Container>
            <Navbar />
            <Annoucements />
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Cart({cart.products.length})</TopText>
                        <TopText>Your Wishlist(0)</TopText>

                    </TopTexts>
                    <TopButton type='filled'>CheckOut</TopButton>

                </Top>
                <Bottom>
                        <Info >
                    {cart.products?.map((p) => (

                            <Product key={p._id} >
                                <ProductDetail>
                                    <Image src={p.img} />
                                    <Details>
                                        <ProductName><b>PRODUCT:</b>{p.title}</ProductName>
                                        <ProductId><b>ID:</b>{p._id}</ProductId>
                                        <ProductColor color={p.color} />
                                        <ProductSize><b>Size:</b>{p.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{p.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>{p.price * p.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                    ))}
                            <Hr />
                        </Info>

                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <Hr />
                        <SummaryItem>
                            <SummaryItemText>Sub Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total} PKR</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                        name='Online Store'
                        image='/assets/img/logo.png'
                        description='easily pay'
                        billingAddress
                        shippingAddress
                        token={onToken}
                        amount={(cart.total / 181.85) * 100 }
                        stripeKey={stripeKey}
                    >
                        <Button>CheckOut Now</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Cart
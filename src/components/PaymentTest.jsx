import React,{useState,useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
function PaymentTest() {
  const stripeKey="pk_test_51KocEsGzXR7JjkBpkPwXlIG54yeS1pSprpg3ZnjDkmmZntARNSv00XeZFaaypP0lolaSBob6UuutrHearlBa6d5f00lBLJ0Etz"
  const [stripeToken,setStripeToken]=useState(null);

  useEffect(()=>{
    const makeRequest=async()=>{
      const res=await axios.post('http://localhost:4000/api/stripe/payment',
      {
        tokenId:stripeToken.id,
        amount:4000
      }
      )
      console.log(res.data);
    }
    makeRequest();
  },[stripeToken])

  const onToken=(token)=>{
  setStripeToken(token);
  }
  return (
    <div>
      <img src='https://www.pngitem.com/pimgs/m/1-17829_dance-shoes-png-free-download-shoes-png-image.png' />
      <StripeCheckout
        name='Online Store'
        image='/assets/img/logo.png'
        description='easily pay'
        billingAddress
        shippingAddress
        token={onToken}
        amount={4000}
        stripeKey={stripeKey}
      >
      <button style={{padding:"20px",backgroundColor:"aqua"}}>Pay</button>
      </StripeCheckout>
    </div>
  )
}

export default PaymentTest
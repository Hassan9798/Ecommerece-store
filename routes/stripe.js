const stripe=require('stripe')("sk_test_51KocEsGzXR7JjkBpp0DIOSDNgSDPdcSBubCFHkKfQkU04V7KdK7pQNU641F4tOcMNMIwMVG3VypQOQD6F1tQ8EsI00Bszog4gU");
const router=require('express').Router();
router.post('/payment',(req,res)=>{
    try{
        console.log(req.body);
        stripe.charges.create(
            {
                source:req.body.tokenId,
                amount:req.body.amount,
                currency:'usd'
            },
            (stripeErr,stripeRes)=>{
                if(stripeErr){
                    res.status(500).json(stripeErr)
        
                }
                else{
                    res.status(200).json(stripeRes)
                }
            }
            )        
    }
    catch(err){
        res.status(500).json(err);
    }
   

})

module.exports=router;
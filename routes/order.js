const Order = require('../models/Order');
const { verifytoken, verifytokenandauthorization, verifytokenandAdmin } = require('./verfiytoken');
const router = require('express').Router();
// CREATE ORDER //
router.post('/createorder',verifytoken,async(req,res)=>{
try{
    const order=new Order(req.body);
    await order.save();
    res.status(200).json(order);
}
catch(err){
    res.status(500).json(err);
}


})
// UPDATE ORDER //
router.put('/:id', verifytokenandAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true }
        );
        res.status(200).json(updatedOrder);
    }
    catch (err) {
        res.status(500).json(err);
    }
})
// DELETE CART //
router.delete('/:id', verifytokenandAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET USER ORDERS //
router.get('/findorder/:id',verifytokenandauthorization, async (req, res) => {
    try {
        const orders = await Order.find({userId:req.params.id});
        res.status(200).json(orders);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL USERS CARTS //
router.get('/',verifytokenandAdmin,async(req,res)=>{
    try{
        const orders=await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }

});
// ORDER STATS //
router.get('/stats',verifytokenandAdmin,async(req,res)=>{
    const date= new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth=new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    // const prevMonth=new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));

    console.log(prevMonth);
    try{
        const income= await Order.aggregate([
            {
                $match:{createdAt:{$gte:prevMonth}}
            },
            {
                $project:{
                    month:{$month:'$createdAt' },
                    sales:'$amount'
                }
            },
            {
                $group:{
                    _id:'$month',
                    total:{$sum:'$sales'}
                }
            }
        ]);
        res.status(200).json(income);

    }
    catch(err){
        res.status(500).json(err);
    }
    

})


module.exports = router;
const Cart = require('../models/Cart');
const { verifytoken, verifytokenandauthorization, verifytokenandAdmin } = require('./verfiytoken');
const router = require('express').Router();
// CREATE PRODUCT //
router.post('/createcart',verifytoken,async(req,res)=>{
try{
    const cart=new Cart(req.body);
    await cart.save();
    res.status(200).json(cart);
}
catch(err){
    res.status(500).json(err);
}


})
// UPDATE CART //
router.put('/:id', verifytokenandauthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true }
        );
        res.status(200).json(updatedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }
})
// DELETE CART //
router.delete('/:id', verifytokenandauthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET USER CART //
router.get('/findcart/:id',verifytokenandauthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId:req.params.id});
        res.status(200).json(cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL USERS CARTS //
router.get('/',verifytokenandAdmin,async(req,res)=>{
    try{
        const carts=await Cart.find();
        res.status(200).json(carts);
    }
    catch(err){
        res.status(500).json(err);
    }

})


module.exports = router;
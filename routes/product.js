const Product = require('../models/Product');
const { verifytoken, verifytokenandauthorization, verifytokenandAdmin } = require('./verfiytoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const router = require('express').Router();
// CREATE PRODUCT //
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage }).single('img');
router.post('/createproduct', verifytokenandAdmin, async (req, res) => {
    try {

        upload(req, res, async (err) => {
            console.log(req.file);
            if (err) {
                res.status(500).json({ msg: 'something is wrong' })
            }
            else {
                if (req.file === undefined) {
                    res.status(500).json('file is invalid')
                }
                else {
                    const product = new Product({
                        title: req.body.title,
                        size: req.body.size,
                        color: req.body.color,
                        categories: req.body.categories,
                        img: 'uploads/' + req.file.filename,
                        desc: req.body.desc,
                        price: req.body.price,
                        inStock: req.body.inStock
                    });
                    await product.save();
                    res.status(200).json(product);

                }
            }
        })

    }
    catch (err) {
        res.status(500).json(err);
    }


})
// UPDATE PROUCT //
router.put('/:id', verifytokenandAdmin, async (req, res) => {
    try {
        if(req.file){

            upload(req, res, async (err) => {
                console.log(req.body);
                if (err) {
                    res.status(500).json({ msg: 'something is wrong' })
            }
            else {
                if (req.file === undefined) {
                    res.status(500).json('file is invalid')
                }
                else {
                    const updatedProduct = await Product.findById(req.params.id);
                    updatedProduct.title = req.body.title;
                    updatedProduct.img = 'uploads/' + req.file.filename;
                    updatedProduct.size = req.body.size;
                    updatedProduct.color = req.body.color;
                    updatedProduct.desc = req.body.desc;
                    updatedProduct.categories = req.body.categories;
                    updatedProduct.price = req.body.price;
                    await updatedProduct.save();
                    res.status(200).json(updatedProduct);

                }
            }
        })
    }
    else{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true }
        );
        res.status(200).json(updatedProduct);
    }
       
    }
    catch (err) {
        res.status(500).json(err);
    }
})
// DELETE PRODUCT //
router.delete('/:id', verifytokenandAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET USER //
router.get('/findproduct/:id', async (req, res) => {
    try {
        const fProduct = await Product.findById(req.params.id);
        res.status(200).json(fProduct);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET ALL PRODUCTS //
router.get('/getallproducts', async (req, res) => {
    try {
        const qnew = req.query.new;
        const qcategory = req.query.category;
        let products;
        if (qnew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        }
        else if (qcategory) {
            products = await Product.find({ categories: { $in: qcategory } });
        }
        else {
            products = await Product.find();
        }
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
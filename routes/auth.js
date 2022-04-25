const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register //
router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        
    }
    catch (err) {
        res.status(500).json(err);
    }


});
// login //
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(500).json('wrong credentials');
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            res.status(500).json('wrong credentials');
        }
        else {
            const token = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin
            }, process.env.JWT_KEY,
                { expiresIn: '3d' }
            )
            const { password, ...others } = user._doc;
            return res.status(201).json({ ...others, token });
        }

    }
    catch (err) {
        console.log(err);
    }



})



module.exports = router;
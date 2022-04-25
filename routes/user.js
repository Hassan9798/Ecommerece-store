const User = require('../models/User');
const { verifytoken, verifytokenandauthorization, verifytokenandAdmin } = require('./verfiytoken');
const bcrypt = require('bcrypt');
const router = require('express').Router();
// UPDATE USER //
router.put('/:id', verifytokenandauthorization, async (req, res) => {
    console.log(req.body);
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true }
        );
        res.status(200).json(updateduser);
    }
    catch (err) {
        res.status(500).json(err);
    }
})
// DELETE USER //
router.delete('/:id', verifytokenandauthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET USER //
router.get('/finduser/:id', verifytokenandAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// GET ALL USER //
router.get('/', verifytokenandAdmin, async (req, res) => {
    try {
        const query = req.query.new;
        const user = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
// USER STATS //
router.get('/stats', verifytokenandAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    console.log(lastYear);
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: {
                        $month: '$createdAt'
                    }
                }
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: 1 },
                }
            }
        ])
        res.status(200).json(data);

    }
    catch (err) {
        res.status(500).json(err);
    }

});

module.exports = router;
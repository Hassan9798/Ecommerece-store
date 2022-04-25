const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authUser = require('./routes/auth');
const User = require('./routes/user');
const Product = require('./routes/product');
const Cart = require('./routes/cart');
const Order = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
dotenv.config();
// Mongo db connection //
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('database is also connected')
    })
    .catch((err) => {
        console.log(err);
    })


// Middlewares //
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authUser);
app.use('/api/user', User);
app.use('/api/products', Product);
app.use('/api/cart', Cart);
app.use('/api/order', Order);
app.use('/api/stripe', stripeRoute);

app.listen(PORT, () => {
    console.log(`app is listeining on port ${PORT}`)
})
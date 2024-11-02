const express = require('express');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const customerRoutes = require('./routes/customerRoutes');
const mongoose = require('mongoose');
const cors = require('cors');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/cocoon_original');
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1);
    };
}

const app = express();

app.use(cors());

const port = 4000;

connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Sử dụng các routes cho sản phẩm và danh mục
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/customers', customerRoutes);


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


require('dotenv').config(); // Load .env at the top
const express = require('express');
const connectDB = require('./configs/db');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/inventory', require('./routes/inventory.route'));
app.use('/api/transactions', require('./routes/transaction.route'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

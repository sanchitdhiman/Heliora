const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

async function connectDB() {
    const client = new MongoClient(process.env.MONGO_URI);
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('heliora');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

connectDB().then((db) => {
    app.locals.db = db; // Store db for routes
    app.use('/api/auth', authRoutes); // Mount auth routes
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
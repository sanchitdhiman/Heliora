const express = require('express');
const app = express();
const port = 5000;

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Heliora Backend is Running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
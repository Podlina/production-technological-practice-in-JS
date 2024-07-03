const express = require('express');
const axios = require('axios');
const app = express();

const API_KEY = '8b8d7e4ec026a8238a6fc168e39bdcf7';
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;

app.get('/statuses/200', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.get('/statuses/300', (req, res) => {
    res.status(300).send('Multiple Choices');
});


app.get('/statuses/400', (req, res) => {
    res.status(400).send('Bad Request');
});


app.get('/statuses/500', (req, res) => {
    res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// app.use('/weather', require('./routes/weather'));

app.listen(PORT, () => {
    
    console.log(`Server is running on port ${PORT}`);
});
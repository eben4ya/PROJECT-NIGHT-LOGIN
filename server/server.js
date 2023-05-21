const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req,res) => {
    res.json("Express Js");
});

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log(`Server is Runnig on PORT ${PORT}`);
});
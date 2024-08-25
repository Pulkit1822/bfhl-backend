const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const user_id = "pulkit_kumar_mathur_18062003";
const email = "pulkit.kumar2021@vitbhopal.ac.in";
const roll_number = "21BCE11602";

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets.filter(item => item === item.toLowerCase()).sort().pop() || "";

    res.json({
        is_success: true,
        user_id,
        email,
        roll_number,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
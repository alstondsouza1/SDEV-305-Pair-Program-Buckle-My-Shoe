const express = require('express');
const PORT = 3000;

const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Function to return the corresponding rhyme based on the number
function buckleConverter(number) {
    if (number === 1 || number === 2) {
        return 'One, two, buckle my shoe!';
    } else if (number === 3 || number === 4) {
        return 'Three, four, shut the door!';
    } else if (number === 5 || number === 6) {
        return 'Five, six, pick up sticks!';
    } else if (number === 7 || number === 8) {
        return 'Seven, eight, lay them straight!';
    } else if (number === 9 || number === 10) {
        return 'Nine, ten, a big fat hen!';
    } else {
        return 'Please enter a number between 1 and 10.';
    }
}

// GET route for the homepage
app.get('/', (req, res) => {
    res.render('home', { message: null, number: null });
});

// POST route to handle form submission
app.post('/', (req, res) => {
    let number = parseInt(req.body.number);
    let message = buckleConverter(number);
    res.render('home', { message: message, number: number });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

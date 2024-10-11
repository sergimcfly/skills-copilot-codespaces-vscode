// Create web server
// 1. Import express
// 2. Create an express app
// 3. Create a route for GET /comments
// 4. Send a response with "Comments page"
// 5. Listen on port 3000
// 6. Start the server
// 7. Visit localhost:3000/comments

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.send('Comments page');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
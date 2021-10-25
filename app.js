const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const app = express();

//cors must be set to the react app's domain, and credentials allowed in order to successfully set cookies on the browser.
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(express.json());
app.use(cookieParser())

app.get('/', (_, res) => res.send('Hello World!'));

//todo: Return an array containing the cookies from the request. - hint: Object.entries may come in handy.
/*
app.get('/api/cookies', (request, response) => {
    let cookies = Object.entries(request.cookies);
    console.log(cookies)
    response.json(cookies)
});
*/
//todo: Create a cookie with a random value.
/*
app.post('/api/cookies/random', (request, response) => {
    let randomValue = `totally random: ${Math.random()}`
    response.cookie('random', randomValue);
    response.end();
});
*/

//todo: Update the username cookie.
app.put('/login', (request, response) => {
    response.cookie('username', 'some other username')
    response.end();
});

//example: This sets a cookie, used in the HeaderUserInfo.jsx file.
app.get('/login', (_, response) => {
    const username = 'A user from the cookie!'
    response.cookie('username', username)
    app.put('/login', (_, res) => res.send('Login Here!'));
    response.end();
});

app.put('/hello', (request, response) => {
    response.cookie('username', 'some other username')

      app.get('/', (_, res) => res.send(`Welcome ['username']!`));

    response.end();
});

//todo: Delete the username cookie.
app.delete('/login', (_, response) => {
    let username;
    response.clearCookie('username')
    response.end();
});

const port = 5000;
app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}.`);
});
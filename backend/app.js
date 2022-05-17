const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to CORS server! :D')
})

app.get('/cors', (req, res) => {
    // need the following line in order for access from a different origin (specifically the URL that the front end is running)
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json({ programmer: 'Jeremy' })
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})
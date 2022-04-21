const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
 
const app = express();
app.use(cors("*"));
app.use(express.json());
 
app.use(favicon(__dirname + '/public/favicon.png'));
 
// Add your routes here, etc.
app.get('/', (req, res) => {
    res.json({
        first_name: "Dan",
        surname: "Willis"
    })
})
 

const port = process.env.PORT || 3009;

app.listen(port, () => console.log(`http://localhost:${port}`))
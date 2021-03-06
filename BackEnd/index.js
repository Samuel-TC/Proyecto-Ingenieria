
const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Inicio del BackEnd" });
});
app.use(require('./src/PersonasRouter.js'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    console.log(`http://localhost:${app.get('port')}`)
});
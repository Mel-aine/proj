const express = require ('express');
const cors = require ('cors');
const bodyParser = require('body-parser');

let Dbi = require ("./orm/index.js");

const app = express();

// Enable CORS


app.use(cors());

// Middleware to parse JSON


app.use(express.json());
app.use(express.urlencoded({extended : true}));
const PORT=process.env.port || 3001
// Import routes
const user_router = require('./routes/users')
const cmd_router = require ('./routes/commandes')
const ligne_router = require ('./routes/lignes')
const menu_router = require ('./routes/menus')
const restaurant_router = require ('./routes/restaurants')
const horaire_router = require ('./routes/horaires')
const categorie_router = require ('./routes/categorie')


// Define routes

app.use('/api/users',user_router)
app.use('/api/commandes',cmd_router)
app.use('/api/lignes',ligne_router)
app.use('/api/menus',menu_router)
app.use('/api/restaurants',restaurant_router)
app.use('/api/horaires',horaire_router)
app.use('/api/categorie',categorie_router)

// Start server
Dbi.connect()
.then (()=>{
    app.listen(3000, () => console.log(`Server is running on port ${3000}`));
})

.catch(err => console.log(`Error connecting to the database: ${err}`));
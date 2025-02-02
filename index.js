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
const user_router = require('./routes/users.js')
const cmd_router = require ('./routes/commandes.js')
const ligne_router = require ('./routes/lignes.js')
const menu_router = require ('./routes/menus.js')
const restaurant_router = require ('./routes/restaurants.js')
const horaire_router = require ('./routes/horaires.js')
const categorie_router = require ('./routes/categorie.js')


// Define routes

app.get('/', (req, res) => res.send ("i m online , welcome"))
app.use('/users',user_router)
app.use('/commandes',cmd_router)
app.use('/lignes',ligne_router)
app.use('/menus',menu_router)
app.use('/restaurants',restaurant_router)
app.use('/horaires',horaire_router)
app.use('/categorie',categorie_router)

// Start server
Dbi.connect()
.then (()=>{
    app.listen(+PORT, () => console.log(`Server is running on port ${PORT}`));
})

.catch(err => console.log(`Error connecting to the database: ${err}`));
const express = require('express')
const Restaurant = require ('../orm/models/restaurant')
const Menu = require ('../orm/models/menu')
const restaurantController = require('../controllers/restaurant')
const userController = require('../controllers/users')
const menuController = require('../controllers/menu')
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, error } = require('console');
    const app = express();
      // Middleware
    app.use(cors());
    app.use(bodyParser.json()); 
    //app.use(bodyParser.json());
    app.use(express.json());

let router = express.Router()

router.get('/', async (req, res) => {
    menus.findAll()
    .then(users => res.json({data : users}))
    .catch(err => res.status(500).json({message :'database error',error : err}))
})

router.post('/form',  async (req, res) => {
    const { FirstName, Email ,Address,LastName ,Phone, Password ,Service,Website,Name} = req.body;
    const { Dish, Description, Category, Price } = req.body;
    

    try {
        const proprio = await userController.createUser({ FirstName, LastName, Email, Password, Address, Phone });
        const id_proprio=proprio.id_utilisateur;
        
        const restaurant = await restaurantController.createRestaurant({Address, Phone, Service, Website, Name,id_proprio});
        const id_restaurant=restaurant.id_restaurant;
            const menu = await menuController.createMenu({ Dish, Name,Description, Category, Price, id_restaurant,});
           
        res.status(201).json({ message: 'Menu enregistré avec succès', data: menu });
    } catch (err) {
        error(err);
        res.status(500).json({message: 'Erreur de la base de données', error: err?.parent?.sqlMessage|| err.message})
    }
});





router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router

const express = require('express')
const User = require ('../orm/models/user')
const Restaurant = require ('../orm/models/restaurant')
const restaurantController = require('../controllers/restaurant')
const userController = require('../controllers/users')
let router = express.Router()
const bodyParser = require('body-parser');

const cors = require('cors');
const { log, error } = require('console');
    const app = express();
    
    
    // Middleware
    app.use(cors());
    app.use(bodyParser.json()); 
    //app.use(bodyParser.json());
    app.use(express.json()); // Pour parser le JSON

        router.post('/form',  async (req, res) => {
       // Récupérer les données du formulaire
          const { FirstName, Email ,Address,LastName ,Phone, Password ,Service,Website,Name} = req.body;
          console.log(req.body)
          
          if (!Email || !Password || !FirstName || !LastName || !Phone || !Address || !Service || !Website || !Name) {
            return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
          }
          
          try{
            const proprio = await userController.createUser({ FirstName, LastName, Email, Password, Address, Phone });
            const id_proprio=proprio.id_utilisateur;
            log(id_proprio)
            const restaurant = await restaurantController.createRestaurant({Address, Phone, Service, Website, Name, id_proprio});
            console.log(restaurant)
            res.status(201).json({ message: "Enregistrement  réussie00", data: restaurant });
          }
          catch(err){
            error(err);
              res.status(500).json({message: 'Erreur de la base de données', error: err?.parent?.sqlMessage|| err.message})
          }
      
          console.log('Fin de la création du restaurant...')
          
      })






    router.get('/resto', async (req, res) => {
        Restaurant.findAll({ attributes: { exclude: ['logo'] },})
      
        .then(restaurants => res.json({data : restaurants}))
       

        
        .catch(err => res.status(500).json({message :'database error',error : err?.parent?.sqlMessage|| err.message}))
    })
    










router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router

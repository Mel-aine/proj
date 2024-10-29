const express = require('express')
const commandes = require ('../orm/models/commande')
const commandeController = require('../controllers/commande')
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
    commandes.findAll()
    .then(users => res.json({data : users}))
    .catch(err => res.status(500).json({message :'database error',error : err}))
})

router.post('/', async (req, res) => {
    try{
      
      const commande = await commandeController.createCommande({ id_owner, Statut,Date,id_restaurant});
      console.log(commande)
      res.status(201).json({ message: "Enregistrement  réussie00", data: commande });
    }
    catch(err){
      error(err);
        res.status(500).json({message: 'Erreur de la base de données', error: err?.parent?.sqlMessage|| err.message})
    }  
    
})

router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router

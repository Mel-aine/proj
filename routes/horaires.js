const express = require('express');
const horaire = require('../orm/models/horaire');
const horaireController = require('../controllers/horaire');
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, error } = require('console');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Utilisez uniquement express.json()

let router = express.Router();

router.post('/form', async (req, res) => {
    const { Day, Opening_hour, Closing_hour,id_restaurant } = req.body; // Assurez-vous que id_restaurant est inclus
    console.log("Requête reçue : ", req.body);

    if (!Day || !Opening_hour || !Closing_hour) {
        return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
    }
    
    try {
        const horaires = await horaireController.createHoraire({ Day, Opening_hour, Closing_hour, id_restaurant });
        res.status(201).json({ message: 'Horaire enregistré avec succès', data: horaires });
    } catch (err) {
        error(err);
        res.status(500).json({ message: 'Erreur de la base de données', error: err?.parent?.sqlMessage || err.message });
    }
});


router.get('/', async (req, res) => {
    horaires.findAll()
    .then(horaires => res.json({data : horaires}))
    .catch(err => res.status(500).json({message :'database error',error : err}))
})



router.get('/:id', async (req, res) => {
    const restaurantId = req.params.id;
      horaire.findAll({
        where: { id_restaurant: restaurantId }
         })
          .then(horaires => res.json({data : horaires}))
          .catch(err => res.status(500).json({message :'database error',error : err?.parent?.sqlMessage|| err.message}))
  })

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})



module.exports = router
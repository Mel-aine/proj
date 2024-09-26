const express = require('express')
const multer = require('multer');
const path = require('path');
const Restaurant = require ('../orm/models/restaurant')
const restaurantController = require('../controllers/restaurant')
const userController = require('../controllers/users')
let router = express.Router()

const cors = require('cors');
const { log } = require('console');
    const app = express();
    
    
    // Middleware
    app.use(cors());
    //app.use(bodyParser.json());
    app.use(express.json()); // Pour parser le JSON

    // Configuration de Multer pour le téléchargement des fichiers
  /*  const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Dossier où les images seront stockées
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Renommer le fichier
      },
    });
      const upload = multer({ storage });
    // Route pour télécharger l'image
router.post('/form', upload.single('logo'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Aucun fichier téléchargé.' });
      }
    console.log(req.file);
    try { 
         const imagePath = req.file.path;
       
    // Enregistrer le chemin de l'image dans la base de donnéess
    const logo = await restaurants.create({path: imagePath });
    res.json({ message: 'Image téléchargée avec succès !', logo : logo });   
        }
        catch(err){
            res.status(500).json({message: 'Erreur de la base de données', error: err.message})
        }
        
    })*/


        router.post('/form',  async (req, res) => {
       // Récupérer les données du formulaire
          const { FirstName, Email ,Address,LastName ,Phone, Password ,Service,Website,Name} = req.body;
          console.log(req.body)
          
          // Validation des entrées
          //if (!Email || !Password || !FirstName ||!LastName || !Phone || !Address || !Service || !Website || !Name ) {
            //  return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
          //}
          try{
            const proprio = await userController.createUser({ FirstName, LastName, Email, Password, Address, Phone });
            const id_proprio=proprio.id_utilisateur;
            log(id_proprio)
            const restaurant = await restaurantController.createRestaurant({Address, Phone, Service, Website, Name, id_proprio});
            console.log(restaurant)
            res.status(201).json({ message: "Enregistrement  réussie00", data: restaurant });
          }
          catch(err){
              res.status(500).json({message: 'Erreur de la base de données', error: err.message})
          }
      
          console.log('Fin de la création du restaurant...')
          
      })






    router.get('/', async (req, res) => {
        restaurants.findAll()
        .then(users => res.json({data : users}))
        .catch(err => res.status(500).json({message :'database error',error : err}))
    })
    

router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router

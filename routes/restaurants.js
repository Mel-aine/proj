const express = require('express')
const multer = require('multer');
const path = require('path');
const Restaurant = require ('../orm/models/restaurant')

let router = express.Router()

const cors = require('cors');
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
          const { FirstName, Email ,Address,LastName ,Phone, Password ,Service,Website,Name,id_proprio} = req.body;
          console.log(req.body)
          
          // Validation des entrées
          //if (!Email || !Password || !FirstName ||!LastName || !Phone || !Address || !Service || !Website || !Name ) {
            //  return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
          //}
          try{

          
              const newRestaurant =await Restaurant.create({ 
                  firstname: FirstName,
                  lastname: LastName,
                  address: Address,
                  phone: Phone,
                  email: Email,
                  password: Password,
                  service : Service,
                  website : Website,
                  name : Name,

                  id_proprio , 
                  //logo: req.file.path, // Stockage du chemin de l'image dans la base de données


                  
           })
              console.log(newRestaurant)
              res.status(201).json({ message: "Enregistrement  réussie", data: newRestaurant });
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

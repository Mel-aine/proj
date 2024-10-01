const express = require('express')
const categoriController = require('../controllers/categorie')


const categorie = require ('../orm/models/categorie')
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, error } = require('console');
const Categories = require('../orm/models/categorie');
    const app = express();
      // Middleware
    app.use(cors());
    app.use(bodyParser.json()); 
    //app.use(bodyParser.json());
    app.use(express.json());


let router = express.Router()

router.get('/cat', async (req, res) => {
    Categories.findAll({ attributes:   ['name']})
        .then(Categories => res.json({data : Categories}))
        .catch(err => res.status(500).json({message :'database error',error : err?.parent?.sqlMessage|| err.message}))
})

router.post('/form', async (req, res) => {


// Récupérer les données du formulaire
const { Description,Name} = req.body;
console.log(req.body)

if ( !Description || !Name) {
  return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
}

try{
  
  const categorie = await categoriController.createCategorie({ Description, Name});
  console.log(categorie)
  res.status(201).json({ message: "Enregistrement  réussie00", data: categorie });
}
catch(err){
  error(err);
    res.status(500).json({message: 'Erreur de la base de données', error: err?.parent?.sqlMessage|| err.message})
}

console.log('Fin de la création du restaurant...')

})







router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router

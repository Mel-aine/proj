const express = require('express')
const User = require ('../orm/models/user')
const Restaurant = require ('../orm/models/restaurant')
const UserController = require ('../controllers/users')

const bcrypt = require('bcrypt');

let router = express.Router()


const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json()); // Pour parser le JSON

router.post('/form', async (req, res) => {
    const { FirstName, Email ,Address,LastName ,Phone, Password } = req.body;
    // Validation des entrées
    if (!Email || !Password || !FirstName ||!LastName || !Phone || !Address ) {
        return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
    }
    try{
        const u=await UserController.createUser({ FirstName,LastName,Address,Phone,Email,Password})
        console.log(u)
        res.status(201).json({ message: "Inscription réussie", data: u });
    }
    catch(err){
        res.status(500).json({message: 'Erreur de la base de données', error: err.message})
    }
    
    /*console.log('launch user creation...')
    await User.create({ 
        firstname: FirstName,
        lastname: LastName,
        address: Address,
        phone: Phone,
        email: Email,
        password: Password,
     })
    .then(u => {
        console.log('user created')
       // res.json({data : u})
        res.json({ message:"Inscription réussie"})
    
    
    
    })
    .catch(err => res.status(500).json({Message :'database error',error : err}))*/
    
    console.log('Fin de la création de l’utilisateur...')
    
})


router.get('/connect',  async (req, res) => {
    
    console.log('launch user retrieve...')
    await User.findAll(
        {
            attributes: ['email', 'password']
          }
    )
    .then(users => {
        console.log('users retrieved')
        //res.json({data :users})

        res.json({data :users})


    })
    .catch(err => res.status(500).json({message :'database error',error : err}))
    console.log('end...')
    
})

router.post('/log',  async (req, res) => { 
    
    
})


router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;

    // Validation des entrées
    console.log(req.body)
    if (!Email || !Password) {
        return res.status(400).json({ message: 'Veuillez renseigner tous les champs' });
    }

    try {
        // Recherche de l'utilisateur
        const user = await User.findOne({ where: { Email }, include: [Restaurant] });

        // Vérification de l'utilisateur
        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Vérification du mot de passe
       // const isPasswordValid = await bcrypt.compare(Password, user.password);
        //if (!isPasswordValid) 
        if (user.password !== Password)  {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }

        // Connexion réussie
        res.json({ data: user });
    } catch (err) {
        res.status(500).json({ message: 'Erreur de base de données', error: err });
    }
});




module.exports = router;







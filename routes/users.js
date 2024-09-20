const express = require('express')
const user = require ('../models/user')





let router = express.Router()



/*router.get('/', async (req, res) => {
    user.findAll()
    .then(users => res.json({data : users}))
    .catch(err => res.status(500).json({message :'database error',error : err}))
})

router.post('/api/form',  (req, res) => {

const { id_utilisateurs,firstname,lastname, email,phone,address, password } = req.body;
    req.getConnection((erreur , connection) =>{
        if(erreur){
            console.log(erreur);
        }else{
            connection.query('INSERT INTO utilisateurs(id_utilisateurs,firstname,lastname, email,phone,address, password) VALUES (?,?,?,?,?,?)',[null,firstname,lastname, email,phone,address, password],(erreur,resultat)=>{
                if(erreur){ 
                console.log(erreur);
                res.status(500).send({message:'erreur lors de l insertion'})
                }else{
                //res.status(300).redirect("/");//redirection avec le status de redirection
                res.status(200).send({message:'Données enregistrées avec succès!'});
                }
            })
                    
            }   
            })


})

router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router*/



const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
//app.use(bodyParser.json());
app.use(express.json()); // Pour parser le JSON

router.post('/api/form',  (req, res) => {
    const { Nom, Email ,Id_utilisateurs,Prenom ,Telephone, Password } = req.body;
    req.getConnection((erreur , connection) =>{
        if(erreur){
            console.log(erreur);
        }else{
            connection.query('INSERT INTO utilisateurs(Id_utilisateurs,Nom,Prenom, Email,Telephone, Password) VALUES (?,?,?,?,?,?)',[null,Nom,Prenom, Email,Telephone, Password],(erreur,resultat)=>{
                if(erreur){ 
                console.log(erreur);
                res.status(500).send({message:'erreur lors de l insertion'})
                }else{
                //res.status(300).redirect("/");//redirection avec le status de redirection
                res.status(200).send({message:'Données enregistrées avec succès!'});
                }
            })
                    
            }   
            })
        //}
    //})
})

module.exports = router;







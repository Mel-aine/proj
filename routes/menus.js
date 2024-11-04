const express = require('express')
const Restaurant = require ('../orm/models/restaurant')
const Menu = require ('../orm/models/menu')
const categoriController = require('../controllers/categorie')
const restaurantController = require('../controllers/restaurant')
const userController = require('../controllers/users')
const menuController = require('../controllers/menu')
const bodyParser = require('body-parser');
const cors = require('cors');
const { log, error } = require('console');
const Categories = require('../orm/models/categorie')
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
    const {  Dish, Name,Description, id_categorie, Price, id_restaurant} = req.body;
    console.log(req.body); 

    try {

        const menu = await menuController.createMenu({ Dish, Name,Description, id_categorie, Price, id_restaurant});
        res.status(201).json({ message: 'Menu enregistré avec succès', data: menu });
    } catch (err) {
        error(err);


        res.status(500).json({message: 'Erreur de la base de données', error: err?.parent?.sqlMessage|| err.message})
    }
});

router.get('/:id', async (req, res) => {
    const categorieId = req.params.id ; // Récupérer l'ID de la catégorie...
    //const restaurantId = req.params.id; //

    try {
        const menus = await Menu.findAll({
            //where: { id_categorie: categorieId }
            
        });

        if (menus.length === 0) {
            return res.status(404).json({ message: 'Aucun menu trouvé pour cette catégorie.' });
        }

        res.status(200).json({ data: menus }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des menus.', error: error.message });
    }

})


router.get('/:id/menu', async (req, res) => {
    const categorieId = req.params.id ; // Récupérer l'ID de la catégorie...
    //const restaurantId = req.params.id; //

    try {
        const menus = await Menu.findAll({
            where: { id_categorie: categorieId }
            
        });

        if (menus.length === 0) {
            return res.status(404).json({ message: 'Aucun menu trouvé pour cette catégorie.' });
        }

        res.status(200).json({ data: menus }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des menus.', error: error.message });
    }

})


router.put('/:id', async (req, res) => {
    const { image, name,description, price} = req.body;


    try {
        const menu = await Menu.findByPk(req.params.id);
        if (!menu) {
            return res.status(404).send('Menu not found');
        }

        if (name !== undefined) menu.name = name;
        if (image !== undefined) menu.image = image;
        if (description !== undefined) menu.description = description;
        if (price !== undefined) menu.price = price;
        await menu.save();
        res.json(menu);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    const menuId = req.params.id ; // Récupérer l'ID du menu...
    try {
        const menu = await Menu.findByPk(menuId);
        if (!menu) {
            return res.status(404).json({ message: 'Menu non trouvé' });
        }
        await menu.destroy();
        res.status(200).json({ message: 'Menu supprimé avec succès' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la suppression du menu.', error: error.message });
    }
})




module.exports = router

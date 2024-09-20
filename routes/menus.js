const express = require('express')

const menus = require ('../models/menu')

let router = express.Router()

router.get('/', async (req, res) => {
    menus.findAll()
    .then(users => res.json({data : users}))
    .catch(err => res.status(500).json({message :'database error',error : err}))
})

router.post('/', async (req, res) => {})

router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})

// Create user


module.exports = router

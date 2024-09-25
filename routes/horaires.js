const express = require('express')

const horaires = require ('../orm/models/horaire')

let router = express.Router()

router.get('/', async (req, res) => {
    horaires.findAll()
    .then(horaires => res.json({data : horaires}))
    .catch(err => res.status(500).json({message :'database error',error : err}))
})

router.post('/', async (req, res) => {})

router.get('/:id', async (req, res) => {})

router.put('/:id', async (req, res) => {})

router.delete('/:id', async (req, res) => {})



module.exports = router
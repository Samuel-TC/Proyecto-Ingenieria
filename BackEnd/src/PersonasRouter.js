
const { Router } = require('express');
const express = require('express');
const router = express.Router();
const controller = require('../src/PersonaController');

router.get('/persona', controller.index); //read only
router.post('/persona',controller.insert); // create
router.put('/persona', controller.update);
router.delete('/persona/:id', controller.delete);

module.exports = router;
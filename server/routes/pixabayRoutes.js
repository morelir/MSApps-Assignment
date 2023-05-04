const express = require('express');
const pixabayController = require('../controllers/pixabayController');


const router = express.Router();


router
  .route('/category/:category')
  .get(pixabayController.getAllHits)
  


module.exports = router;

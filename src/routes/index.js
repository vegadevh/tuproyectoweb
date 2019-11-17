const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/CSS', (req, res) => {
  res.render('CSS');
});

router.get('/JavaScript', (req, res) => {
  res.render('JavaScript');
});

router.get('/HTML', (req, res) => {
  res.render('HTML');
});

router.get('/Repositorio', (req, res) => {
  res.render('Repositorio');
});



module.exports = router;
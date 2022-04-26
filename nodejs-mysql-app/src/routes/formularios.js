const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const pool= require('../database');

router.get('/add', (req, res) => {
    res.render('formularios/add');
});
router.post('/add',async (req, res) => {
    const{nProyecto,metricas,descripcion} = req.body;
    const NewFormulario = {
        nProyecto,metricas,descripcion
    };
    await pool.query('INSERT INTO formularios ?',[NewFormulario]);
    res.send('FORMULARIO GUARDADO');
});   
router.post('/', async (req, res) => {
    const formularios = await pool.query('SELECT *FROM formularios');
});

module.exports = router;

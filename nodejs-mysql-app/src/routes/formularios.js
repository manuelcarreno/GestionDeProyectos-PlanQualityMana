const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const pool= require('../database');

router.get('/add', (req, res) => {
    res.render('formularios/add');
});
router.post('/add',async (req, res) => {
    /*const{Nombredelproyecto,metrica1,metrica2,metrica3,opcion1,opcion2,FechaInicio,Fechatermino,descripcion} = req.body;
    const NewFormulario = {
        Nombredelproyecto,metrica1,metrica2,metrica3,opcion1,opcion2,FechaInicio,Fechatermino,descripcion
    };
    await pool.query('INSERT INTO formularios ?',[NewFormulario]);
    res.send('FORMULARIO GUARDADO')*/
    console.log(req.body)
});   
router.post('/', async (req, res) => {
    const formularios = await pool.query('SELECT *FROM formularios');
});

module.exports = router;

const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const pool= require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add',isLoggedIn, (req, res) => {
    res.render('formularios/add');
});
router.post('/add',isLoggedIn,async  (req, res) => {
    const{Nombredelproyecto,metrica1,metrica2,metrica3,opcion1,opcion2,FechaInicio,FechaTermino,descripcion} = req.body;
    const NewFormulario = {
        Nombredelproyecto,
        metrica1,
        metrica2,
        metrica3,
        opcion1,
        opcion2,
        FechaInicio,
        FechaTermino,
        descripcion
    };
    await pool.query('INSERT INTO formularios set ?',[NewFormulario]);
    req.flash('Aceptado','Plan Guardado de Manera Exitosa');
    res.redirect('/formularios');
});   
router.get('/',isLoggedIn, async (req, res) => {
    const formularios = await pool.query('SELECT *FROM formularios');
    res.render('formularios/list',{formularios:formularios});
});
router.get('/delete/:id',isLoggedIn, async (req, res)=> {
    const {id}= req.params;
    await pool.query('DELETE FROM formularios WHERE ID = ?',[id]);
    req.flash('Aceptado','Plan Eliminado Satisfactoriamente');
    res.redirect('/formularios');
});
router.get('/edit/:id',isLoggedIn, async (req, res)=> {
    const {id}= req.params;
    const formularios = await pool.query('SELECT * FROM formularios WHERE id = ?',[id]);
    res.render('formularios/edit',{formulario: formularios[0]});
});
router.post('/edit/:id',isLoggedIn, async (req, res)=> {
    const {id}= req.params;
    const{Nombredelproyecto,metrica1,metrica2,metrica3,opcion1,opcion2,FechaInicio,FechaTermino,descripcion} = req.body;
    const NewFormulario = {
        Nombredelproyecto,
        metrica1,
        metrica2,
        metrica3,
        opcion1,
        opcion2,
        FechaInicio,
        FechaTermino,
        descripcion
    };
    await pool.query('UPDATE formularios set ? WHERE id= ?',[NewFormulario,id]);
    req.flash('Aceptado','Plan Editado Satisfactoriamente');
    res.redirect('/formularios');
});

module.exports = router;

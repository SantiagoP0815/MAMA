const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', (req, res) => {
    res.render('clients/add');
});

router.post('/add', async (req, res) => {
    const { name, telefono, busto, talle, espalda, cintura, base, largoblusa, largopantalon, falda, largototal, cinturafalda, cinturapantalon, alturabusto, separacionbusto, escote, manga } = req.body;
    const newClient = {
        name,
        telefono,
        busto,
        talle,
        espalda,
        cintura,
        base,
        largoblusa,
        largopantalon,
        falda,
        largototal,
        cinturafalda,
        cinturapantalon,
        alturabusto,
        separacionbusto,
        escote,
        manga,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO clients set ?', [newClient]);
    res.redirect('/clients');
});

router.get('/', isLoggedIn, async (req, res) => {
    const clients = await pool.query('SELECT * FROM clients WHERE user_id = ?', [req.user.id]);
    res.render('clients/list', { clients });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM clients WHERE ID = ?', [id]);
    res.redirect('/clients');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const clients = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
    res.render('clients/edit', {client: clients[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, telefono, busto, talle, espalda, cintura, base, largoblusa, largopantalon, falda, largototal, cinturafalda, cinturapantalon, alturabusto, separacionbusto, escote, manga } = req.body;
    const newClient = {
        name,
        telefono,
        busto,
        talle,
        espalda,
        cintura,
        base,
        largoblusa,
        largopantalon,
        falda,
        largototal,
        cinturafalda,
        cinturapantalon,
        alturabusto,
        separacionbusto,
        escote,
        manga
    };
    await pool.query('UPDATE clients set ? WHERE id = ?', [newClient, id]);
    res.redirect('/clients');
});

router.get('/info/:id', async (req, res) => {
    const { id } = req.params;
    const clients = await pool.query('SELECT * FROM clients WHERE id = ?', [id]);
    res.render('clients/info', {client: clients[0]});
});

module.exports = router;
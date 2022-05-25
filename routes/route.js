const express = require('express');
const AppRouter = express.Router();
const axios = require('axios');
const webPush = require('web-push');
const { getSuscripciones } = require('../models/suscripcion');

AppRouter.post('/vendehumos', async (req, res) => {
    const vendehumo = req.body;

    const resp = await axios.post('http://localhost:3000/vendehumos', vendehumo);

    
    const payload = {
        norification: {
            title: 'Nuevo vendehumos',
            body: 'Ve a votar a ' + resp.data.nombre
        }
    }
    const suscripciones = await getSuscripciones();
    
    suscripciones.forEach((s) => {
        webPush.sendNotification(s, JSON.stringify(payload));
    });
            
    return res.status(201).json(resp.data);        

});

module.exports = AppRouter;

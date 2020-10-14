const express = require('express');
const Schedule = require ('../models/Schedule');
const Solicitation = require('../models/Solicitation');
const router = express.Router();

//service accepted - agenda serviço e apaga a solicitação
router.post('/accepted/:id', async (req, res) => {
    
    const solicitation = await Solicitation.findById(req.params.id);

    const schedule = await Schedule.create({
        name: solicitation.name,
        date: solicitation.date,
        hour: solicitation.hour,
        contact: solicitation.contact,
        type: solicitation.type,
        street: solicitation.street,
        number: solicitation.number,
        message: solicitation.message,        
    });

    solitation = await Solicitation.findByIdAndRemove(req.params.id);

    res.json({schedule});
});

//service accepteds - lista os serciços aceitos
router.get('/accepted', async (req, res) => {
    const schedule = await Schedule.find();

    res.json({schedule});
});

//service deleted - apaga o serviço agendado
router.delete('/accepted/:id', async (req, res) => {
    await Schedule.findByIdAndRemove(req.params.id);

    res.json('removido com sucesso');
});

module.exports = app => app.use('/api', router);
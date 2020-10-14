const express = require('express');
const Solicitation = require('../models/Solicitation');

const router = express.Router();

//solicitation create - cria uma solicitação
router.post('/solicitations', async(req, res) => {
    const solicitation = await Solicitation.create(req.body);

    return res.send({solicitation});
});

//solicitations - lista as solicitações
router.get('/solicitations', async(req, res) => {
    const solicitation = await Solicitation.find();

    res.json(solicitation);
});

//solicitation - lista uma solicitação
router.get('/solicitations/:id', async(req, res) => {
    solicitation = await Solicitation.findById(req.params.id);
        
    return res.json(solicitation);
});

//solicitation update - atualiza uma solicitação
router.put('/solicitations/:id', async(req, res) => {
    const solicitation = await Solicitation.findByIdAndUpdate(req.params.id, req.body, { new: true})

    return res.json(solicitation);
});

//solicitation delete - apaga uma solicitação
router.delete('/solicitations/:id', async(req, res) => {
    await Solicitation.findByIdAndRemove(req.params.id);

    return res.json('removido');
});

module.exports = app => app.use('/api', router);
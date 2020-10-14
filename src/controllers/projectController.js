const express = require('express');

const authMiddleware = require('../middlewares/auth');

const router = express.Router();

const Solicitation = require('../models/Solicitation');
const Schedule = require ('../models/Schedule');
const Finished = require ('../models/Finished')

router.use(authMiddleware);

/* ----- Solicitação ----- */

//create
router.post('/solicitations', async(req, res) => {
    const solicitation = await Solicitation.create(req.body);

    return res.send({solicitation});
});

//read
router.get('/solicitations', async(req, res) => {
    const solicitation = await Solicitation.find();

    res.json(solicitation);
});

//read 1
router.get('/solicitations/:id', async(req, res) => {
    const solicitation = await Solicitation.findById(req.params.id);
        
    return res.json(solicitation);
});

//update
router.put('/solicitations/:id', async(req, res) => {
    const solicitation = await Solicitation.findByIdAndUpdate(req.params.id, req.body, { new: true})

    return res.json(solicitation);
});

//delete
router.delete('/solicitations/:id', async(req, res) => {
    await Solicitation.findByIdAndRemove(req.params.id);

    return res.json('removido');
});

/* ----- Agenda ----- */

//create
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

//read
router.get('/accepted', async (req, res) => {
    const schedule = await Schedule.find();

    res.json({schedule});
});

//delete
router.delete('/accepted/:id', async (req, res) => {
    await Schedule.findByIdAndRemove(req.params.id);

    res.json('removido com sucesso');
});

/* ----- Finalizados ----- */

//create
router.post('/finished/:id', async (req, res) => {

    const schedule = await Schedule.findById(req.params.id);

    const finished = await Finished.create({
        name: schedule.name,
        date: schedule.date,
        hour: schedule.hour,
        contact: schedule.contact,
        type: schedule.type,
        street: schedule.street,
        number: schedule.number,
        message: schedule.message,        
    });

    await Schedule.findByIdAndRemove(req.params.id);

    res.json({finished});
});

//read
router.get('/finished', async (req, res) => {

    const finished = await Finished.find();

    res.json({finished});
});

//read 1
router.get('/finished/:id', async (req, res) => {

    const finished = await Finished.findById(req.params.id);
        
    return res.json(finished);
    
});

//delete
router.delete('/finished/:id', async (req, res) => {
    await Finished.findByIdAndRemove(req.params.id);

    res.json('removido com sucesso');
});

module.exports = app => app.use('/create', router);
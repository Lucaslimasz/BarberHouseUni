const express = require ('express');
const Schedule = require ('../models/Schedule');
const Finished = require ('../models/Finished')
const router = express.Router();

//criar um serviço finalizado
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

router.get('/finished', async (req, res) => {

    const finished = await Finished.find();

    res.json({finished});
});

router.get('/finished/:id', async (req, res) => {

    await Finished.findById(req.params.id).then((x) => {
        const schedule = Schedule.find();
        res.json({schedule});
    });

});

router.delete('/finished/:id', async (req, res) => {
    await Finished.findByIdAndRemove(req.params.id);

    res.json('removido com sucesso');
});

module.exports = app => app.use('/api', router);
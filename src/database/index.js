const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://Admin:barber*senha@cluster0.tchrr.mongodb.net/barberhouse?retryWrites=true&w=majority',
{ useMongoClient: true }).then(() => {
    console.log("MongoDB conectado...");
  }).catch((err) => {
    console.log('Houve um erro ao se conectar ao banco: ' + err);
  });
mongoose.Promise = global.Promise;

module.exports = mongoose;
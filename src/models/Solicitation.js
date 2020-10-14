const mongoose = require('../database/index');

const SolicitationSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        required: true
    },
    hour:{
        type: String,
        required: true
    },
    contact:{
        type: Number,
        required: true,
    },
    type:{
        type:String,
        required:true
    },
    street:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    message:{
        type: String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = Solicitation = mongoose.model('Solicitation', SolicitationSchema);
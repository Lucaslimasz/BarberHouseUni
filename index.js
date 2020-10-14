const express = require ('express');
const bodyParse = require ('body-parser');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

requireDir('./src/models');

app.use(cors());

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended : false }));

require('./src/controllers/authController')(app);
require('./src/controllers/projectController')(app);
require('./src/controllers/SolicitationController')(app);
require('./src/controllers/ScheduleController')(app);
require('./src/controllers/FinishedController')(app);

app.listen(5000);
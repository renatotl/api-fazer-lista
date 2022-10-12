require("dotenv").config()
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3001;
const app = express();
const route = require('./src/routes/agenda.route');
const connectToDataBase = require('./src/database/database');

connectToDataBase();

app.use(cors());// o cors deixamos encima das rotas para não dar problema com o front
app.use(express.json());
app.use('/agendas', route);

app.listen(port, () => {
  console.log(`Serve work on http://localhost:${port}`);
});

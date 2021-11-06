import './loadEnv.js';
import path from 'path';
import express from 'express';
import router  from './routes/routes.js';
import municipio from './routes/municipio.js'
import cliente from './routes/cliente.js'
const PORT = 11000;

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', router);
app.use('/', municipio);
app.use('/', cliente);

app.listen(PORT, ()=>{
    console.log(`App listening in port ${PORT}`);
});
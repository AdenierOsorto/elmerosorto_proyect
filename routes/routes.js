import express from 'express';
import {newMunicipio} from '../controllers/authController.js'
const router = express.Router();
//get, para optener las views
router.get('/',(req, res) =>{
    res.render('index');
});
router.get('/new',(req, res) =>{
    res.render('new');
});
router.get('/newMunicipio',(req, res) =>{
    res.render('newMunicipio');
});

//post para insertar datos en la base de datos

router.post('/newMunicipio', newMunicipio);

export default router;
import express from 'express';
import { newCliente } from '../controllers/authCliente.js';
import { selectMunicipio } from '../controllers/authController.js';
const router = express.Router();

router.get('/cliente',selectMunicipio,(req, res) =>{
    res.render('cliente',{munis:req.data});
});

router.post('/newCliente', newCliente);

export default router;
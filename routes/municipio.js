import express from 'express';
import {deleteMunicipio, newMunicipio, selectMunicipio, editarMunicipio, buscarMunicipio} from '../controllers/authController.js'
const router = express.Router();


router.get('/newMunicipio',selectMunicipio,(req, res) =>{
    res.render('newMunicipio', {datos: req.data});
});



// insert
router.post('/newMunicipio', newMunicipio);


//1.25.00
//delete
router.get('/deleteMunicipio/:id', deleteMunicipio);
//editar
router.get('/buscarMunicipio/:id', buscarMunicipio, (req, res) =>{
    res.render('editarMunicipio', {datos:req.data})
});
export default router;
import express from 'express';
import {deleteMunicipio, newMunicipio, selectMunicipio} from '../controllers/authController.js'
const router = express.Router();


router.get('/newMunicipio',selectMunicipio,(req, res) =>{
    res.render('newMunicipio', {datos: req.data});
});



// insert
router.post('/newMunicipio', newMunicipio);


//1.25.00
//delete
router.get('/deleteMunicipio/:id', deleteMunicipio);
export default router;
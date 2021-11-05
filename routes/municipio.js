import express from 'express';
import {newMunicipio, selectMunicipio} from '../controllers/authController.js'
const router = express.Router();


router.get('/newMunicipio',selectMunicipio,(req, res) =>{
    console.log(req.data);
    res.render('newMunicipio', {datos: req.data});
});

// insert
router.post('/newMunicipio', newMunicipio);


export default router;
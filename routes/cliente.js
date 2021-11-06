import express from 'express';
const router = express.Router();

router.get('/cliente',(req, res) =>{
    res.render('cliente');
});


export default router;
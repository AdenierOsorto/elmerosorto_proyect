import express from 'express';
const router = express.Router();
//get, para optener las views
router.get('/',(req, res) =>{
    res.render('index');
});
router.get('/new',(req, res) =>{
    res.render('new');
});

//post para insertar datos en la base de datos


export default router;
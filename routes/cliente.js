import express from 'express';
import { deleteCliente, editarCliente, newCliente, selectCliente } from '../controllers/authCliente.js';
import { selectMunicipio } from '../controllers/authController.js';
const router = express.Router();

router.get('/cliente',selectMunicipio, selectCliente,(req, res) =>{
    console.log(req.dataCliente);
    res.render('cliente',{munis:req.data, clientes: req.dataCliente});
});
//ingresar
router.post('/newCliente', newCliente);
//eliminar
router.get('/deleteCliente/:cod', deleteCliente);

//editar
router.post('/editarCliente/:cod', editarCliente);
export default router;
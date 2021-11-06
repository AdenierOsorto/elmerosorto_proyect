import cnn from '../database/connection.js';
export const  newMunicipio  = async (req, res) => {
    const { nommunicipio} = req.body;
    console.log(req.body);
    
    
    //contruir la data que sera insertada;
    const data = {
        nombreMunicipio: nommunicipio
    };
    
    // construir el query 
    // consultas preparadas
    cnn.query('INSERT INTO municipios SET ?', data, (err, result)=>{
        if(err){
            console.log(`ocurrio un error al insertar el registro, ${err}`);
            res.redirect('/newMunicipio');
            return;
        }
        res.redirect('/newMunicipio');
    });
}
export const  selectMunicipio = async (req, res, next) => {  
    //contruir la data que sera insertada;
    const data = {};
    cnn.query('SELECT * FROM municipios', data, (err, result)=>{
        if(err){
            console.log(`Un error al mostrar la información: ${err}`);
            return;
        }
        req.data = result;
        next();
    });
}
export const  deleteMunicipio = async (req, res, next) => {  
    const {id} = req.params;
    cnn.query('DELETE FROM municipios WHERE municipioId = ?', [id], (err, result)=>{
        if(err){
            console.log(`Un error al eliminar la información: ${err}`);
            return;
        }
        res.redirect('/newMunicipio');
        next();
    });
}
export const  buscarMunicipio = async (req, res, next) => {  
    //contruir la data que sera insertada;
    const {id} = req.params;
    cnn.query('SELECT * FROM municipios WHERE municipioId = ? ', [id], (err, result)=>{
        if(err){
            console.log(`Un error al buscar al usuario: ${id}: ${err}`);
            return;
        }
        if(result.length > 0){
            req.data = result;
        }
        else
            res.redirect('/newMunicipio');
        next();
    });
}
export const  editarMunicipio = async (req, res, next) => {  
    const {id} = req.params;
    cnn.query('DELETE FROM municipios WHERE municipioId = ?', [id], (err, result)=>{
        if(err){
            console.log(`Un error al eliminar la información: ${err}`);
            return;
        }
        res.redirect('/newMunicipio');
        next();
    });
}
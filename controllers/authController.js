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
    cnn.query('INSERT INTO municipio SET ?', data, (err, result)=>{
        if(err){
            console.log(`ocurrio un error al insertar el registro, ${err}`);
            return;
        }
        res.redirect('/')
    });
}
export const  selectMunicipio = async (req, res, next) => {  
    //contruir la data que sera insertada;
    const data = {};
    cnn.query('SELECT * FROM municipio', data, (err, result)=>{
        req.data = result;
        next();
    });
}
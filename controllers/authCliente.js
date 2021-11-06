import cnn from '../database/connection.js';
export const  newCliente  = async (req, res) => {
    const { nommunicipio} = req.body;
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
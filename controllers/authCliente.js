import cnn from '../database/connection.js';
export const  selectCliente = async (req, res, next) => {  
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
export const  newCliente = async (req, res, next) => {  
    //contruir la data que sera insertada;
    console.log(req.body);
    const {clienteCod, nombreCliente, 
            apellidoCliente, emailCliente,
            telefonoCliente, fechaCliente,
            municipioCliente} = req.body;
    const data = {
        clienteCod: clienteCod,
        nombre: nombreCliente,
        apellido: apellidoCliente,
        email: emailCliente,
        telefono: telefonoCliente,
        fechaNacimiento: fechaCliente,
        municipioId:municipioCliente
    };
    cnn.query('INSERT INTO clientes SET ?', data, (err, result)=>{
        if(err){
            console.log(`Un error al mostrar la información: ${err}`);
            res.redirect('/cliente');
            return;
        }
        res.redirect('/cliente');
        next();
    });
}
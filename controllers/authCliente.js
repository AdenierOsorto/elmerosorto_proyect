import cnn from '../database/connection.js';
export const  selectCliente = async (req, res, next) => {  
    //contruir la data que sera insertada;
    const data = {};
    cnn.query('select c.clienteCod, c.nombre, c.apellido, c.email, c.telefono, c.fechaNacimiento, c.municipioId, m.nombreMunicipio from clientes c INNER JOIN municipios m on c.municipioId = m.municipioId;', data, (err, result)=>{
        if(err){
            console.log(`Un error al mostrar la información: ${err}`);
            return;
        }
        
        req.dataCliente = result;
        next();
    });
}
export const  newCliente = async (req, res, next) => {  
    //contruir la data que sera insertada;
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
export const  deleteCliente = async (req, res, next) => {  
    const {cod} = req.params;
    cnn.query('DELETE FROM clientes WHERE clienteCod = ?', [cod], (err, result)=>{
        if(err){
            console.log(`Un error al eliminar la información: ${err}`);
            return;
        }
        res.redirect('/cliente');
        next();
    });
}
export const editarCliente = async (req, res, next) => {  
    const {clienteCod, nombreCliente, 
        apellidoCliente, emailCliente,
        telefonoCliente, fechaCliente,
        municipioCliente} = req.body;
    const {cod} = req.params;
    const data = [
        clienteCod,
        nombreCliente,
        apellidoCliente,
        emailCliente,
        telefonoCliente,
        fechaCliente,
        municipioCliente,
        cod
    ];
    
    cnn.query('UPDATE clientes SET clienteCod = ?, nombre = ?, apellido = ?, email = ?, telefono = ?, fechaNacimiento = ?, municipioId = ? WHERE clienteCod = ?', data, (err, result)=>{
        if(err){
            console.log(`Un error al editar la información: ${err}`);
            return;
        }
        res.redirect('/cliente');
        next();
    });
}
import cnn from '../database/connection.js';
export const  newMunicipio  = async (req, res) => {
    // const {fullname, username, password} = req.body;
    console.log(req.body);
    

    //contruir la data que sera insertada;
    // const data = {
    //     username: username
        
    // };

    // construir el query 
    // consultas preparadas
    // cnn.query('INSERT INTO users SET ?', data, (err, result)=>{
    //     if(err){
    //         console.log(`ocurrio un error al insertar el registro`);
    //         return;
    //     }
    //     res.redirect('/')
    // });
}
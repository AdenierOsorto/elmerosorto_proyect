function editar(cod, nombre, apellido, email, telefono, fecha, muniID){
    $('.editar').show();
    $('.guardar').hide();
    $('.editar-cliente').attr('action', `/editarCliente/${cod}`);
    $('.clienteCod').val(cod);
    $('.nombreCliente').val(nombre);
    $('.apellidoCliente').val(apellido);
    $('.emailCliente').val(email);
    $('.telefonoCliente').val(telefono);
    $('.fechaCliente').val(fecha);
    $('.municipioCliente').val(muniID);
}
$(function(){

    $('.editar').hide();

})
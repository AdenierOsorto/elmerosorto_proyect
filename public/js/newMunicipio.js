function editar(id, nom){
    $('.guardar').hide();
    $('.editar').show();
    $('#form-muni').attr('action', `/editarMunicipio/${id}`)
    $('#id-muni').val(id);
    $('#nom-muni').val(nom);

}

$(function(){

    $('.editar').hide();
    
});
const formatearFecha = fecha => {

    const fechaNueva = new Date(fecha);
    
    return fechaNueva.toLocaleDateString('es-Es', {year: 'numeric', month: 'long' , day: '2-digit'});
     
}


export default formatearFecha;
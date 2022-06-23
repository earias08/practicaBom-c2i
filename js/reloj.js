function obtenerFecha(){
    
}


setInterval(()=>{
    let fecha = new Date();
    // console.log(fecha)
    
    // console.log(fecha.getDate()); //numeros del dia de la semana 1-31
    // console.log(fecha.getDay()); // numeros de los dias de domingo a sabado 0-6
    // console.log(fecha.getMonth()); // numero de meses comenzando desde 0 corresponde a enero
    // console.log(fecha.getFullYear()); 
    
    let semanas = ['Domingo','Lunes','Martes','Miercoles', 'Jueves','Viernes','Sabado'];
    let meses = ['enero','febrero','marzo','abril', 'mayo','junio','julio','agosto','septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    let fechaReloj = document.getElementById('fecha');
    fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`
    
    // arreglar los valores de un digito
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horas = fecha.getHours();

    if(horas <10){
        horas = '0' + horas;
    }
    if(minutos <10){
        minutos = '0' + minutos;
    }
    if(segundos <10){
        segundos = '0' + segundos;
    }

    let horaReloj = document.querySelector('#hora');
    horaReloj.innerHTML = `${horas}:${minutos}:${segundos}`
},1000)

function cambiarColor(color){
    let seccion = document.getElementsByClassName('fechaHora');
    seccion[0].className = `fechaHora ${color}`;
}

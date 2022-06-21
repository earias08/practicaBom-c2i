let contador = 1;

function mostrarPublicidad(){
    if(contador === 5){
        // quiero detener el intervalo
        window.clearInterval(codigo);
    }
    document.write('<p>Ahora muestro publicidad</p>');
    contador++
}

// ejecutar una funcion pasado cierto tiempo en milisegundos
// window.setTimeout(mostrarPublicidad,3000);

// window.setTimeout(function (){
//     document.write('<p>Ahora muestro publicidad</p>');
// }, 4000 )

// setTimeout(()=>{document.write('<p>Ahora muestro publicidad</p>')}, 3500);

//ejecutar una funcion cada cierto tiempo en milisegundos
let codigo = setInterval(mostrarPublicidad,3000);


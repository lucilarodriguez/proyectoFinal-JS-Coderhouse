function getDatosPersonales() {
    let input1 = document.getElementById("nombre").value;
    let input2 = document.getElementById("tipoPC").value;
    agregarSalida("Hola "+input1+" tu elección fue: "+input2);
}

function agregarSalida(texto) {
    let salida = document.createElement("p");
    salida.textContent =texto;
    document.getElementById("contenedorInput").appendChild(salida);
    
}


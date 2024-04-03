


var nombres = ['articulo1','articulo2','articulo3'];
var cantidad = [1,5,10];

function adicionaOSustrae(elNombre,laCantidad,laAccion) {
    var indice = nombres.indexOf(elNombre);
    if (indice == -1) {
        alert(`El ${elNombre} no existe`);
    } else{
        if (laAccion=='sumar') {
            cantidad[indice]+=laCantidad
        } else {
            cantidad[indice]-=laCantidad
        }
    }
}

function realizarAccion(control) {
    var auxName;
    var auxCant;
    var controlCiclo=true;

    event.stopPropagation();

    while (controlCiclo) {
        auxName= prompt('Nombre del articulo?');
        if (auxName!=null && auxName!='') {
            controlCiclo=false;
        } else {
            alert('Debe ingresar un dato.');
        }
    }
    controlCiclo=true;
    while (controlCiclo) {
        auxCant= parseFloat(prompt(`Cantidad a ${control}`));
        if (!(isNaN(auxCant)) && auxCant>0) {
            controlCiclo=false;
        } else {
            alert('Debe ingresar un numero.');
        }
    }
    controlCiclo=true;
    console.log(`Nombre: ${auxName}; Cantidad: ${auxCant}; Operacion: ${control}`);
    adicionaOSustrae(auxName,auxCant,control);
}

function informacion() {

    for (let i = 0; i < nombres.length; i++) {
        alert(`Nombre: ${nombres[i]}; Cantidad: ${cantidad[i]}`);
        console.log(`Nombre: ${nombres[i]}; Cantidad: ${cantidad[i]}`);
    }
}

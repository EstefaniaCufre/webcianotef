let inicio = prompt("¡Bienvenido a la tienda virtual de CianoTef! ¿Querés adquirir obras originales?")
let productos;
let sumatoria=0;
let precio=2000
if ((inicio == "SI") || (inicio == "Si") || (inicio == "Sí") || (inicio == "SÍ") ||(inicio == "si") || (inicio == "sí")) {

for (let i=1; i<=6; i++) {
    let productos=parseInt(prompt("Ingrese el precio del producto "+ i));
    console.log("Producto " + i + ": "+ productos + " pesos")
    sumatoria=sumatoria+productos;
}
let totalSinIva=sumatoria;
alert ("El total sin IVA es de $ "+sumatoria);
}
else {
    alert ("¡Ok! ¡Hasta la próxima!")
}

let totalConIva=function (precio){return precio*1.21};

console.log (totalConIva(sumatoria));

alert ("El total con IVA es de $ "+(totalConIva(sumatoria)));

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

alert ("El total sin IVA es de $ "+sumatoria);

let totalConIva=function (precio){return precio*1.21};

console.log (totalConIva(sumatoria));

alert ("El total con IVA es de $ "+(totalConIva(sumatoria)));

}
else {
    alert ("¡Ok! ¡Hasta la próxima!")
};

const misObras=[
    {
        titulo:"Su nombre no importa",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2000
    },
    {
        titulo:"Palacio de Comunicaciones",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2200
    },
    {
        titulo:"Serpiente metálica",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2500
    },
    {
        titulo:"La Castellana",
        serie:"Ciudades",
        papel: "Vegetal",
        precio:2000
    },
    {
        titulo:"Mensajes aéreos",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2200
    },
   {
        titulo:"¿Sueñan los monjes con feriados?",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2500
    },
    {
        titulo:"Desde afuera",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2000
    },
    {
        titulo:"Novios ausentes",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2500
    },
];

for(const obra of misObras){
    console.log("Titulo: "+obra.titulo+" - Precio: $"+obra.precio);
}


class Obra{
    constructor(misObras){
        this.titulo=misObras.titulo;
        this.serie=misObras.serie;
        this.papel=misObras.papel;
        this.precio=misObras.precio;
        
    }
    sumaIVA(){
        this.precio=this.precio*1.21;
    }   
}


for (const obra of misObras) {
misObras.push(new Obra(misObras.titulo="El movimiento estático",misObras.serie="Silencios territoriales", misObras.papel="Acuarela", misObras.precio=2250))
}

console.log(misObras);

misObras.forEach((obra)=>{console.log(misObras.titulo)});

const menorPrecio=misObras.filter((obra)=> misObras.precio<2500);

if(menorPrecio.length>0){
    console.log(menorPrecio);
}else{
    console.log("No se encontraron cianotipias");
}

let encontrado=misObras.find((obra)=>misObras.titulo=="La Castellana");
console.log(encontrado);
if(encontrado==undefined){
    console.log("Sin stock");
}else{
    console.log(encontrado.titulo+" "+encontrado.serie+" "+encontrado.precio)
}

//DOM - desafio complementario
console.dir(document.body);

let titulo=document.getElementsByTagName("h2");
console.log(titulo.innerText);
titulo.innerText="Tienda Virtual de CianoTef";
titulo.style.font="regular 2rem Montserrat";

const text=document.createElement("p")
const node=document.createTextNode("Todas las obras son originales. Serán entregadas con su correspondiente certificado de autenticidad");
text.appendChild(node);
const element=document.getElementById("disclaimer");
element.appendChild(text);


//Desafio: incorporar eventos




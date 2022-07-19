const misObras=[
    {
        id: 1,
        imagen: ".../img/producto 1.png",
        titulo:"Su nombre no importa",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2000
    },
    {
        id: 2,
        imagen: ".../img/producto 2.png",
        titulo:"Palacio de Comunicaciones",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2200
    },
    {
        id: 3,
        imagen: ".../img/producto 3.png",
        titulo:"Serpiente metálica",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2500
    },
    {
        id: 4,
        imagen: ".../img/producto 4.png",
        titulo:"La Castellana",
        serie:"Ciudades",
        papel: "Vegetal",
        precio:2000
    },
    {
        id: 5,
        imagen: ".../img/producto 5.png",
        titulo:"Mensajes aéreos",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2200
    },
   {
        id: 6,
        imagen: ".../img/producto 6.png",
        titulo:"¿Sueñan los monjes con feriados?",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2500
    },
    {
        id: 7,
        imagen: ".../img/producto 7.png",
        titulo:"Desde afuera",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2000
    },
    {
        id: 8,
        imagen: ".../img/producto 8.png",
        titulo:"Novios ausentes",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2500
    },
    {
        id: 9,
        imagen: ".../img/producto 9.png",
        titulo:"El movimiento estático",
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
    misObras.push(
        new Obra(
            (titulo=obra.titulo),
            (serie=obra.serie),
            (papel=obra.papel),
            (precio=obra.precio)
        )
    );
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

btnTienda.onclick=()=>{
    console.log("Estás por adquirir esta obra");
}

btnTienda.onmouseover=()=>{
    console.log("Obra disponible");
}


let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
let productosJSON = [];
let lista

function renderizarProductos() {
    //renderizamos los productos 
    console.log(productosJSON)
    for (const prod of productosJSON) {
        lista.innerHTML+=(`<li class="col-sm-3 list-group-item">
        <h3>ID: ${prod.id}</h3>
        <img src="${prod.foto}" width="250px" height="250px">
        <p>Producto: ${prod.nombre}</p>
        <h4>Precio $ ${prod.precio}</h4>
        <button class="btn btn-danger" id='btn${prod.id}'>COMPRAR</button>
    </li>`);
    }
    //EVENTOS
    productosJSON.forEach(prod=> {
         //Evento para cada boton
         document.getElementById(`btn${prod.id}`).onclick= function() {
            agregarACarrito(prod);
        };
    });
}

class ProductoCarrito {
    constructor(objProd) {
        this.id = objProd.id;
        this.foto = objProd.foto;
        this.nombre = objProd.nombre;
        this.precio = objProd.precio;
        this.cantidad = 1;
    }
}

function agregarACarrito(productoNuevo) {
    let encontrado = carrito.find(p => p.id == productoNuevo.id);
    console.log(encontrado);
    if (encontrado == undefined) {
        let prodACarrito = new ProductoCarrito(productoNuevo);
        carrito.push(prodACarrito);
        console.log(carrito);
        Swal.fire(
            'Nuevo producto agregado al carro',
            productoNuevo.nombre,
            'success'
        );
        //agregamos una nueva fila a la tabla de carrito
        document.getElementById("tablabody").innerHTML+=(`
            <tr id='fila${prodACarrito.id}'>
            <td> ${prodACarrito.id} </td>
            <td> ${prodACarrito.nombre}</td>
            <td id='${prodACarrito.id}'> ${prodACarrito.cantidad}</td>
            <td> ${prodACarrito.precio}</td>
            <td> <button class='btn btn-light' onclick='eliminar(${prodACarrito.id})'>🗑️</button>`);
    } else {
        //pido al carro la posicion del producto 
        let posicion = carrito.findIndex(p => p.id == productoNuevo.id);
        console.log(posicion);
        carrito[posicion].cantidad += 1;
        //con querySelector falla
        document.getElementById(productoNuevo.id).innerHTML=carrito[posicion].cantidad;
    }
    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function calcularTotal() {
    let suma = 0;
    for (const elemento of carrito) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;
}

function eliminar(id){
    let indice=carrito.findIndex(prod => prod.id==id);
    carrito.splice(indice,1);//eliminando del carro
    let fila=document.getElementById(`fila${id}`);
    document.getElementById("tablabody").removeChild(fila);//eliminando de la tabla
    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}


//GETJSON de productos.json
async function obtenerJSON() {
    const URLJSON="/productos.json"
    const resp=await fetch("productos.json")
    const data= await resp.json()
    productosJSON = data;
    renderizarProductos();
}
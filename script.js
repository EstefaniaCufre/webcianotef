// API
let dolarVenta
let euroVenta

window.onload=()=>{
    lista=document.getElementById("productos");
    obtenerValorDolar();
};

async function obtenerValorDolar() {
    const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/dolaroficial";
    const resp=await fetch(URLDOLAR)
    const data=await resp.json()
    document.getElementById("valor_dolar").innerHTML+=(`<p align="center">Dólar compra: $ ${data.compra}  Dólar venta: $ ${data.venta}</p>`);
    dolarVenta = data.venta;
    obtenerJSON();
}

async function obtenerValorEuro() {
    const URLEURO = "https://api-dolar-argentina.herokuapp.com/api/euro/nacion";
    const resp=await fetch(URLEURO)
    const data=await resp.json()
    document.getElementById("valor_euro").innerHTML+=(`<p align="center">Euro compra: $ ${data.compra}  Euro venta: $ ${data.venta}</p>`);
    euroVenta = data.venta;
    obtenerJSON();
}


//DOM llamada a renderizar
let carrito=[];
if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
}
let lista=document.getElementById("miLista");

let misObras=[];

class Obra{
    constructor(misObras){
        this.id=misObras.id;
        this.imagen=misObras.imagen;
        this.titulo=misObras.titulo;
        this.serie=misObras.serie;
        this.papel=misObras.papel;
        this.precio=misObras.precio;
        
    }
    sumaIVA(){
        this.precio=this.precio*1.21;
    }   
}

renderizarObras();

function renderizarObras() {
    for(const obra of misObras){
        
        lista.innerHTML+=`<li class="col-12 col-md-6 col-lg-4 list-group-item">
            <img src=${obra.imagen}>
            <h5> Título: ${obra.titulo} </h5>
            <p> Serie: ${obra.serie}</p>
            <p> Papel: ${obra.papel}</p>
            <p><strong> $ ${obra.precio} </strong></p>
            <button class='btn btn-tienda' id='btnTienda${obra.id}'>Comprar</button>
            </li>`;
    }


// Eventos boton
    misObras.forEach(obra=>{
        document.getElementById(`btn${obra.id}`).addEventListener('click',function(){
            agregarAlCarrito(misObras);
        });
    });
}

function agregarAlCarrito(itemNuevo){
    carrito.push(itemNuevo);
    console.log(carrito);
    alert("Obra: "+itemNuevo.titulo+" agregada al carro.");
    document.getElementById("tablabody").innerHTML+=`
    <tr>
        <td>${itemNuevo.titulo}</td>
        <td>${itemNuevo.serie}</td>
        <td>${itemNuevo.papel}</td>
        <td>${itemNuevo.precio}</td>
    </tr>
`;
localStorage.setItem("carrito",JSON.stringify(carrito));
}





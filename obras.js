const misObras=[
    {
        id: 1,
        imagen: "https://www.innovaventas.com/tienda/wp-content/uploads/2020/07/camara-web-imilab-cmsxj22a-2mp-full-hd-2-300x300.jpg",
        titulo:"Su nombre no importa",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2000
    },
    {
        id: 2,
        imagen: "../img/producto 2.png",
        titulo:"Palacio de Comunicaciones",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2200
    },
    {
        id: 3,
        imagen: "../img/producto 3.png",
        titulo:"Serpiente metálica",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2500
    },
    {
        id: 4,
        imagen: "../img/producto 4.png",
        titulo:"La Castellana",
        serie:"Ciudades",
        papel: "Vegetal",
        precio:2000
    },
    {
        id: 5,
        imagen: "../img/producto 5.png",
        titulo:"Mensajes aéreos",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2200
    },
   {
        id: 6,
        imagen: "../img/producto 6.png",
        titulo:"¿Sueñan los monjes con feriados?",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2500
    },
    {
        id: 7,
        imagen: "../img/producto 7.png",
        titulo:"Desde afuera",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2000
    },
    {
        id: 8,
        imagen: "../img/producto 8.png",
        titulo:"Novios ausentes",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2500
    },
    {
        id: 9,
        imagen: "../img/producto 9.png",
        titulo:"El movimiento estático",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2500
    },

    
];

for(const obra of misObras){
    console.log("Titulo: "+obra.titulo+" - Precio: $"+obra.precio);
};
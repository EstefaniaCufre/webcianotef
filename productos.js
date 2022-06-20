const carrito = new CrearCarrito();

const productos = [
	{
		id: 1,
        img: "/img/producto 1.png",
        titulo: "Su nombre no importa",
		serie: "Ciudades",
        papel: "Acuarela",
		precio: 2000,
	},
	{
		id: 2,
        img: "/img/producto 2.png",
        titulo:"Palacio de Comunicaciones",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2200
	},
	{
		id: 3,
        img: "/img/producto 3.png",
        titulo:"Serpiente metálica",
        serie:"Ciudades",
        papel: "Acuarela",
        precio:2500
	},
	{
		id: 4,
        img: "/img/producto 4.png",
        titulo:"La Castellana",
        serie:"Ciudades",
        papel: "Vegetal",
        precio:2000
	},
	{
		id: 5,
        imagen: "/img/producto 5.png",
        titulo:"Mensajes aéreos",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2200
	},
	{
		id: 6,
        imagen: "/img/producto 6.png",
        titulo:"¿Sueñan los monjes con feriados?",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2500
	},
    {
        id: 7,
        imagen: "/img/producto 7.png",
        titulo:"Desde afuera",
        serie:"Silencios territoriales",
        papel: "Acuarela",
        precio:2000
    },
    {
        id: 8,
        imagen: "/img/producto 8.png",
        titulo:"Novios ausentes",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2500
    },
    {
        id: 9,
        imagen: "/img/producto 9.png",
        titulo:"El movimiento estático",
        serie:"Silencios territoriales",
        papel: "Vegetal",
        precio:2500
    },
];

const quitarDelCarrito = (id) => {
	carrito.eliminarProducto(id);
	listarProductos(productos);
	mensajeExito("Producto eliminado!");
};

const agregarAlCarrito = (id) => {
	const producto = productos.find((p) => p.id === id);
	carrito.agregarProducto(producto);
	listarProductos(productos);
	mensajeExito("Producto agregado!");
};

const listarProductos = (productos) => {
	const contenedor = document.querySelector("#productos");
	contenedor.innerHTML = "";

	productos.forEach((p) => {
		const card = crearCard(p);
		contenedor.appendChild(card);
	});
};

const crearCard = ({ id, img, titulo, serie, papel, precio }) => {
	const card = document.createElement("div");
	card.setAttribute(
		"class",
		"flex flex-col justify-between bg-white p-6 hover:scale-105 transition rounded-lg drop-shadow-2xl fade-in"
	);

	card.innerHTML = `
                <img src="${img}" alt="${titulo}" class="pb-2 drop-shadow-lg" />
				<h2 class="text-gray-700 font-sans text-xl">${titulo}</h2>
				<h3>#${id}</h3>
				<h4>$${precio}</h4>
				<div class="w-full px-4 my-4 outline outline-1 outline-slate-300"></div>`;

	const button = document.createElement("button");

	if (!carrito.productoEnCarrito(id)) {
		button.textContent = "Agregar";
		button.setAttribute(
			"class",
			"focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
		);
		button.onclick = () => agregarAlCarrito(id);
	} else {
		button.textContent = "Eliminar";
		button.setAttribute(
			"class",
			"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
		);
		button.onclick = () => quitarDelCarrito(id);
	}

	card.appendChild(button);
	return card;
};

// setTimeout(() => listarProductos(productos), 500);
listarProductos(productos);
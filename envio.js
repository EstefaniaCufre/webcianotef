const carrito = new CrearCarrito();
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => handleSubmit(e));

let datosForm;

function handleSubmit(e) {
	e.preventDefault();

	const data = new FormData(form);
	datosForm = Object.fromEntries(data.entries());
	enviarDatos(datosForm);

	form.reset();
	mensajeEnvio("Toda la información ha sido enviada.");
}

function handleSubmit(datos) {
	console.table(datos);
	console.log(carrito.productos);
}



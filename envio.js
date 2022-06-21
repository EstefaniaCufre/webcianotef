const carrito = new CrearCarrito();
const form = document.querySelector("#form");

const validation = new window.JustValidate(form);

validation
	.addField("#nombre", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
		{
			rule: "minLength",
			value: 3,
			errorMessage: "3 caracteres mínimo",
		},
	])
	.addField("#email", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
		{
			rule: "asunto",
			errorMessage: "Inserte asunto",
		},
	])
    .addField("#email", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
		{
			rule: "email",
			errorMessage: "Inserte email válido",
		},
	])
	.addField("#mensaje", [
		{
			rule: "required",
			errorMessage: "Campo obligatorio",
		},
		{
			rule: "minLength",
			value: 15,
			errorMessage: "Por favor, escribí la dirección de envío completa.",
		},
	]);

validation.showSuccessLabels({ "#email": "The email looks good!" });

form.addEventListener("submit", (e) => handleSubmit(e));

let datosForm;

function handleSubmit(e) {
	e.preventDefault();

	if (!validation.isValid) return mensajeError("Compruebe los datos");

	const data = new FormData(form);
	datosForm = Object.fromEntries(data.entries());
	enviarDatos(datosForm);

	form.reset();
	mensajeExito("Toda la información ha sido enviada.");
}

function enviarDatos(datos) {
	console.table(datos);
	console.log(carrito.productos);
}



 Swal.fire({
	title: 'Bienvenido a la tienda virtual de CianoTef',
	text: 'Todas las obras son originales',
	color: '#EEF4ED',
	imageUrl:'/img/Pixie.png',
	imageWidth: 250,
	imageHeight: 250,
	imageAlt: 'Cianotipia original',
	background: '#C95C7F'
  })


const config = {
	duration: 2000,
	newWindow: true,
	close: false,
	gravity: "top",
	position: "center",
	stopOnFocus: true,
	text: "sin mensaje",
	style: {
		background: "#C95C7F",
		color: "#EEF4ED",
	},
};

const mensajeExito = (mensaje) => {
	if (!mensaje) return;
	Toastify({
		...config,
		text: mensaje,
		style: {
			background: "#C95C7F",
			color: "#EEF4ED",
		},
	}).showToast();
};

const mensajeError = (mensaje) => {
	if (!mensaje) return;
	Toastify({
		...config,
		text: mensaje,
		style: {
			background: "#C95C7F",
			color: "#EEF4ED",
		},
	}).showToast();
};

const mensajeEnvio = (mensaje) => {
	if (!mensaje) return;
	Toastify({
		...config,
		text: mensaje,
		style: {
			background: "#C95C7F",
			color: "#EEF4ED",
		},
	}).showToast();
};


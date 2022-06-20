const config = {
	duration: 2000,
	newWindow: true,
	close: false,
	gravity: "top",
	position: "center",
	stopOnFocus: true,
	text: "sin mensaje",
	style: {
		background: "#65a30d",
		color: "white",
	},
};

const mensajeExito = (mensaje) => {
	if (!mensaje) return;
	Toastify({
		...config,
		text: mensaje,
		style: {
			background: "#65a30d",
			color: "white",
		},
	}).showToast();
};

const mensajeError = (mensaje) => {
	if (!mensaje) return;
	Toastify({
		...config,
		text: mensaje,
		style: {
			background: "#dc2626",
			color: "white",
		},
	}).showToast();
};


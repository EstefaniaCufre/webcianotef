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


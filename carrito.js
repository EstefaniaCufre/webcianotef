const minimoEnvioGratis = 3000;
const costoEnvio = 550;

class CrearCarrito {
	constructor() {
		this.productos = this._recuperarCarrito() || [];
		this.precioTotal = 0;
	}

	agregarProducto(producto) {
		this.productos = [producto, ...this.productos];
		this._calcularTotal(this.productos);
		this._guardarCarrito();
	}

	eliminarProducto(idProducto) {
		const index = this.productos.findIndex((p) => p.id === idProducto);
		if (index < 0) return;

		this.productos.splice(index, 1);
		this._guardarCarrito();
		this.precioTotal = this._calcularTotal(this.productos);
	}

	vaciarCarrito() {
		if (!this.productos.length) return mensajeError("¡El carrito está vacío!");

		this.productos = [];
		this.precio = 0;
		this._guardarCarrito();
		mensajeExito("Carrito vaciado!");
	}

	calcularTotalConEnvío() {
		return this.precioTotal >= minimoEnvioGratis
			? this.precioTotal
			: this.precioTotal + costoEnvio;
	}

	productoEnCarrito(idProducto) {
		return !!this.productos.find((p) => p.id === idProducto);
	}

	_guardarCarrito() {
		localStorage.setItem("carrito", JSON.stringify(this.productos));
	}

	_recuperarCarrito() {
		const carrito = JSON.parse(localStorage.getItem("carrito"));
		if (carrito) {
			this.precioTotal = this._calcularTotal(carrito);
		}
		return carrito;
	}

	_calcularTotal(productos) {
		let total = 0;

		productos.forEach((prod) => {
			total = total + prod.precio;
		});
		return total;
	}
}


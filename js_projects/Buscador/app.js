const productos = [
	{ nombre: 'platano', valor: 53 },
	{ nombre: 'sandia', valor: 37 },
	{ nombre: 'pera', valor: 26 },
	{ nombre: 'fresa', valor: 55 },
	{ nombre: 'almendra', valor: 21 },
	{ nombre: 'limón', valor: 17 },
	{ nombre: 'tuna', valor: 43 },
];
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
	//console.log(formulario.value);
	resultado.innerHTML = '';
	const texto = formulario.value.toLowerCase();

	for (let producto of productos) {
		let nombre = producto.nombre.toLowerCase();
		if (nombre.indexOf(texto) !== -1) {
			resultado.innerHTML += `
				<li>${producto.nombre} - valor: ${producto.valor}</li>`;
		}
	}
	if (resultado.innerHTML === '') {
		resultado.innerHTML += `
        <li>Producto no encontrado...</li>`;
	}
};

boton.addEventListener('click', filtrar);
formulario.addEventListener('keyup', filtrar);

filtrar();

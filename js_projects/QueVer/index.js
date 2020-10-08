let lista = ['Oscuro Deseo', 'Love Alarm', 'How to Sell Drugs Online'];
let tabla = document.getElementById('lista');

lista.forEach((element) => {
	var newLi = document.createElement('li');
	newLi.innerHTML = element;
	tabla.appendChild(newLi);
});

function refresh() {
	lista.forEach((element) => {
		tabla.removeChild(tabla.childNodes[0]);
	});
}

function agregar() {
	refresh();

	var obj = document.getElementById('obj').value;
	lista.push(obj);

	lista.forEach((element) => {
		var newLi = document.createElement('li');
		newLi.innerHTML = element;
		tabla.appendChild(newLi);
	});
}

function decidir() {
	var num = Math.floor(Math.random() * lista.length);
	//alert(lista[num]);
	let insertar = document.getElementById('final');
	var newH3 = document.createElement('h3');
	newH3.innerHTML = 'Hoy veran: ' + lista[num];
	insertar.appendChild(newH3);
}

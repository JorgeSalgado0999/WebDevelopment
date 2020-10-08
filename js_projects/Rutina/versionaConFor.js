//variables  globales
const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];
//forma de las actividades
// let item = {
// 	actividad: 'trotar',
// 	estado: false,
// };

//funciones
const crearItem = (actividad) => {
	let item = {
		actividad: actividad,
		estado: false,
	};
	arrayActividades.push(item);
	return item;
};
const guardarDB = () => {
	localStorage.setItem('rutina', JSON.stringify(arrayActividades));
	pintarDB();
};
const pintarDB = () => {
	listaActividadesUI.innerHTML = '';
	arrayActividades = JSON.parse(localStorage.getItem('rutina'));
	if (arrayActividades === null) {
		arrayActividades = [];
	} else {
		arrayActividades.forEach((element, index) => {
			if (element.estado) {
				listaActividadesUI.innerHTML += `<div class="alert alert-success" role="alert">
                <span class="material-icons float-left"> eco </span>
                <b>${element.actividad}</b> - ${element.estado}
                <span class="float-right">
                    <span class="material-icons" id="done${index}"> done </span>
                    <span class="material-icons" id="delete${index}"> delete </span>
                </span>
            </div>`;
			} else {
				listaActividadesUI.innerHTML += `<div class="alert alert-danger" role="alert">
                <span class="material-icons float-left"> eco </span>
                <b>${element.actividad}</b> - ${element.estado}
                <span class="float-right">
                    <span class="material-icons" id="done${index}"> done </span>
                    <span class="material-icons" id="delete${index}"> delete </span>
                </span>
            </div>`;
			}
		});
		//Este for fue una solución rápida que se me ourrió para agregar el eventlistener
		for (i = 0; i < arrayActividades.length; i++) {
			let deleteUI = document.getElementById(`delete${i}`);
			deleteUI.addEventListener('click', () => {
				//console.log(deleteUI.parentNode.parentNode.childNodes[3].innerHTML +'delete');
				EliminarDB(
					deleteUI.parentNode.parentNode.childNodes[3].innerHTML
				);
			});
			let doneUI = document.getElementById(`done${i}`);
			doneUI.addEventListener('click', () => {
				//console.log(doneUI.parentNode.parentNode.childNodes[3].innerHTML +'done');
				editarDB(doneUI.parentNode.parentNode.childNodes[3].innerHTML);
			});
		}
	}
};

const EliminarDB = (actividad) => {
	//console.log(actividad);
	let indexArray;
	arrayActividades.forEach((elemento, index) => {
		if (elemento.actividad === actividad) {
			indexArray = index;
		}
	});
	arrayActividades.splice(indexArray, 1);
	guardarDB();
};
const editarDB = (actividad) => {
	let indexArray = arrayActividades.findIndex(
		(elemento) => elemento.actividad === actividad
	);
	arrayActividades[indexArray].estado = true;
	guardarDB();
};

//Eventlistener
formularioUI.addEventListener('submit', (e) => {
	e.preventDefault();
	let actividadUI = document.querySelector('#actividad').value;

	crearItem(actividadUI);
	formularioUI.reset();
	guardarDB();
});

document.addEventListener('DOMContentLoaded', pintarDB);

listaActividadesUI.addEventListener('click', (e) => {
	e.preventDefault();
	//console.log(e); // al analizar e podemos observar y entender cual es el elemento que queremos

	//var prueba = e.path[2].childNodes[3].innerHTML || e.explicitOriginalTarget.textContent;
	//console.log(e.explicitOriginalTarget.textContent); // Funciona en firefox
	//console.log(e.path[2].childNodes[3].innerHTML); // Funciona en chrome
	//console.log(e);
});

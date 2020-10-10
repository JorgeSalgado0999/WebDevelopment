//variables a usar
const formulario = document.getElementById('formulario');
const formularioNuevoUsuario = document.getElementById('formularioNuevoUsuario');
const users = document.getElementById('users');
const user = document.getElementById('user');
const name = document.getElementById('name');
const genre = document.getElementById('genre');
const emotion = document.getElementById('emotion');
const peliculas = document.getElementById('movies');
const userNewName = document.getElementById('userNewName');
const addBtn = document.getElementById('addMovie');
const addUsr = document.getElementById('addUser');
//variables de la base de datos
const database = firebase.database();
let rootRef = database.ref('Default');
//variable para arreglar el error de duplicación de usuarios
let misUsers = [];

//funciones a usar
const inicio = ()=>{
	peliculas.innerHTML = '';
	users.reset();
    formulario.reset();
    crearUsuarios();
};

function crearUsuarios() {
	database.ref().on('value', (snapshot) => {
		if (misUsers.length == 0) {
			//console.log(Object.keys(snapshot.val()));
			misUsers = Object.keys(snapshot.val());
			misUsers.forEach(function (nameUser) {
				//console.log(element);
				let nodo = document.createElement('option');
				nodo.value = nameUser;
				nodo.text = nameUser;
				user.add(nodo);
			});
		}
	});
};

const escribir = () => {
	//console.log(user.value);
	rootRef = database.ref(user.value);
	//esto me regresa un json con los datos
	rootRef.on('value', (snapshot) => {
		peliculas.innerHTML = '';
		let ides = Object.keys(snapshot.val()); //De esta forma obtengo los id
		let index = 0;
		snapshot.forEach(function (childSnapshot) {
			var data = childSnapshot.val();
			// console.log(data);
			//console.log(index);
			peliculas.innerHTML += `<li class="list-group-item">
                <b>${data.name}</b>
                <b class="ides">${ides[index]}</b>
                <span class="float-right">
                    <span class="material-icons"> done </span>
                </span>
            </li>`;
			index++;
		});
	});
};

const agregar = (e) => {
	e.preventDefault();
	const autoId = rootRef.push().key;
	rootRef.child(autoId).set({
		name: name.value,
		genre: genre.value,
		emotion: emotion.value,
	});
	formulario.reset();
};

const eliminar = (eliminar) => {
	peliculas.innerHTML = '';
	rootRef.child(eliminar).remove();
	escribir();
};

function crearUsuario(e){
    e.preventDefault();
    let nodo = document.createElement('option');
    rootRef = database.ref(userNewName.value);
	const autoId = rootRef.push().key;
	rootRef.child(autoId).set({
		name: 'Aqui veras tus peliculas',
		genre: '',
		emotion: '',
	});
	nodo.value = userNewName.value;
	nodo.text = userNewName.value;
	nodo.selected = true;
	user.appendChild(nodo);
    formularioNuevoUsuario.reset();
    escribir();
};

const vista = (e) => {
	e.preventDefault();
	let elemento = e.target.parentElement.parentElement.childNodes[3].innerHTML;
	let accion = e.target.innerHTML.trim();
	switch (accion) {
		case 'done':
			eliminar(elemento);
			break;
		default:
			break;
	}
}


//event listeners 
user.addEventListener('change', escribir);

addBtn.addEventListener('click', agregar);

addUsr.addEventListener('click', (e)=>crearUsuario(e));

document.addEventListener('DOMContentLoaded', inicio);

movies.addEventListener('click', (e)=>vista(e));

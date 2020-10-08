const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');

const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();
const rootRef = database.ref('J&P');

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const autoId = rootRef.push().key;
	rootRef.child(autoId).set({
		first_name: firstName.value,
		last_name: lastName.value,
		age: age.value,
	});
});

// addBtn.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	database.ref('users' + userId.value).set({
// 		first_name: firstName.value,
// 		last_name: lastName.value,
// 		age: age.value,
// 	});
// });

updateBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const newData = {
		age: age.value,
		first_name: firstName.value,
		last_name: lastName.value,
	};
	//Este código sirve para agregar el mismo elemento a 2 objetos diferentes
	// const updates = {};
	// updates['/J&P/' + userId.value] = newData;
	// updates['/superUsers/' + userId.value] = newData;
	// database.ref().update(updates);

	rootRef.child(userId.value).update(newData);
});

removeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	//rootRef.child(userId.value).remove(); //esto elimina el nodo completo
	//database.ref('/superUsers/').child(userId.value).remove(); //le estoy diciendo que elimine de la tabla super users;
	rootRef
		.child(userId.value)
		.remove()
		.then(() => {
			window.alert('user removed from database');
		})
		.catch((error) => {
			console.error(error);
		});
});

// // get events
// rootRef.on('child_added', (snapshot) => {
// 	console.log('child(s) added');
// });
// rootRef.on('child_removed', (snapshot) => {
// 	console.log('child(s) remove');
// });
// rootRef.on('child_changed', (snapshot) => {
// 	console.log('child(s) changed');
// });
// //este ultimo captura todos los eventos
// rootRef.on('value', (snapshot) => {
// 	console.log('an event occured on the database');
// });
// // the once method solo funcionará una vez
// rootRef.once('child_changed', (snapshot) => {
// 	console.log('child(s) changed');
// });
// //this is for check if we can listen events
// rootRef.child(0).on('child_changed', (snapshot) => {
// 	console.log('child(s) changed');
// });
// //snapshot saves the new changes
// rootRef.on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });

//queries
//esto me regresa un json con los datos
// rootRef.orderByKey().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });

// usando queries
//limitToFirst() && limitToLast() esto me da los primeros n elementos o los ultimos n elementos
// rootRef
// 	.orderByKey()
// 	.limitToFirst(2)
// 	.on('value', (snapshot) => {
// 		console.log(snapshot.val());
// 	});

//los ordenaremos por una key especifica
//al combinar este con limitTo podemos obtener el valor mas grande o mas pequeño sin tener que buscar nosotros
// rootRef.orderByChild('age').on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });

// equalTo() nos busca valores exactos según por lo que ordenemos da null si no encuntra nada
// rootRef
// 	.orderByChild('first_name')
// 	.equalTo('Paulina Isabel')
// 	.on('value', (snapshot) => {
// 		console.log(snapshot.val());
// 	});

//satrt at busca parametros que inicien con ese valor
// rootRef
// 	.orderByChild('first_name')
// 	.startAt('P')
// 	.on('value', (snapshot) => {
// 		console.log(snapshot.val());
// 	});

//Esto me regresara los datos en la base de datos de communities
// database.ref('/communities/').orderByValue().on('value', snapshot =>{
//     console.log(snashot.val());
// });

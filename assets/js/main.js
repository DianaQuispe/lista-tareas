var elementosLista = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 7,
    "id": 12,
    "title": "esse et quis iste est earum aut impedit",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];
 function To(userId, id, title) {
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = new Boolean(true);

}
 
//.strike()


var tabla = document.getElementById("listita");
for(var re = 0; re <elementosLista.length; re++) {
	var hilera = document.createElement("tr");
	var celda1 = document.createElement("td");
	var celda0 = document.createElement("td");
	var celda3 = document.createElement("td");

		celda1.innerHTML += "<li>"  + elementosLista[re].title + "</li>"; 
	/*
	celda1.innerHTML += "<li>"  + nuevoE + "</li>"; 
	*/
	var celda0 = document.createElement("td");
	hilera.appendChild(celda0);
	hilera.appendChild(celda1);
	tabla.appendChild(hilera)

}



var agregarB = document.getElementById("agregarB");
agregarB.onclick = function() { 

	var nuevoE = document.getElementById("input").value;
	var nuevo = {
    "userId": undefined,
    "id": undefined,
    "title": nuevoE,
    "completed": undefined
  };
   	var hilera = document.createElement("tr");
 	var tabla = document.getElementById("listita");

    elementosLista.push(nuevo);
    hilera.appendChild(celda1);
	tabla.appendChild(hilera)


    celda3.innerHTML += "<li>"  + elementosLista[re].title + "</li>"; 


}

var agregarB = document.getElementById("agregarB");
agregarB.onclick = function() {

	var nuevoE = document.getElementById("input").value;
	var nuevo = {
    "userId": undefined,
    "id": undefined,
    "title": nuevoE,
    "completed": undefined
  };

  	elementosLista.push(nuevo);
	document.getElementById('div').innerHTML += "<li>" + nuevoE + "</li>";
	console.log(elementosLista);
}
/*
function limpiar(){
	var nuevoE = document.getElementById("input").value;
	nuevoE.value = "";

}
*/

/*
var celdaa1 = document.createElement("tr");
var agregarB = document.getElementById("agregarB");
agregarB.onclick = function() {
		var hilera1 = document.createElement("tr");

	hilera1.appendChild(celdaa1);
		tabla.appendChild(hilera)

celdaa1.innerHTML += "<li>"  + nuevoE + "</li>";
var nuevoE = document.getElementById("input").value;
var nuevo = {
    "userId": undefined,
    "id": undefined,
    "title": nuevoE,
    "completed": undefined
  };

elementosLista.push(nuevo);
document.getElementById('div').innerHTML += "<li>" + nuevoE + "</li>";
	console.log(elementosLista);
}

/*
function mostrar(title) {
	this.title = title;

}


for(var i = 0; i <elementosLista.length-1 ; i++) {
	document.getElementById('div').innerHTML += "<li>"  + elementosLista[i].title + "</li>";
}

	*/
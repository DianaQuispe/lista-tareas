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
    "id": 123,
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
 
function mostrar(title) {
	this.title = title;
}

for(var i = 0; i <elementosLista.length-1 ; i++) {
//	var str = "";
//	str+= "<li>" + elementosLista[i].title + "</li>";
document.getElementById('div').innerHTML += "<li>" + elementosLista[i].title + "</li>";;

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
	document.getElementById('div').innerHTML += "<li>" + nuevoE + "</li>";;


	console.log(elementosLista);
}

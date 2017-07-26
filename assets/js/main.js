
 function To (userId, id, title, completed) {
  this.userId = userId;
  this.id = id;
  this.title = title;
  this.completed = false;

}

var array = [
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

 function  mostrar() { 
 var checkbox = document.createElement("checkbox");
 var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.id = "id";
var label = document.createElement('label')
label.htmlFor = "id";

 var ul = document.getElementById("listaId");
  for (var i = array.length - 1; i >= 0; i--) {

    ul.innerHTML += checkbox;
    ul.innerHTML += "<li>" + array[i].title ;

  }
  }

var nuevoB = document.getElementById("agregarB"); 
nuevoB.onclick = function() {
  nuevoId = document.getElementById("input").value;
  var el = [{
    "userId": undefined,
    "id": undefined,
    "title": nuevoId,
    "completed" :false,
  }]
  var to = new To(this.userId, 0, nuevoId, this.completed)     
  array.push(to);
  mostrar();

}
 



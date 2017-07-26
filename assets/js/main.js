
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
var div = document.getElementById("div");

str ="<ul style =  text-align:left ' >";
var ul = document.getElementById("listaId");
var div = document.getElementById("div");
  for (var i = array.length - 1; i >= 0; i--) {
     str += "<li>" + array[i].title+ "</li>" ;
  	 //   if(array[i].completed == true ) {
  	   // }
 	}
 	
str += "</ul>";
div.innerHTML = str;
var lis = document.getElementsByTagName('li');
var input = document.getElementById("input").value;
var ul = document.getElementById('listaId');
ul.onclick= function(event) {
   
 }


for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click',redirect,false);
	}

	function redirect(event){
	    var valor=(event.target.textContent);
	    (event.target).style.textDecoration =  ((event.target).style.textDecoration =="line-through") ? 'transparent' : "line-through" ;
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
mostrar();



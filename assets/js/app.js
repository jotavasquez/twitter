//tomar elemento boton
var btn = document.getElementById("btn");

//BOTON GUARDAR TWEETS
// tomar evento para elemento boton y ejecutar funcion que valida y agrega los tweets
btn.addEventListener("click", function () {
	//toma texto ingresado del textarea
	var comment = document.getElementById('comment').value;
	//limpiar el textarea se usa mucho en formularios
	document.getElementById('comment').value = '';
	//creamos el div que contendrá cada Tweet nuevo
	var newComments = document.createElement('div');
	
	//validar que textarea tenga un msje
	if (comment.length == 0 || comment == null) {
		alert('Debes ingresar un mensaje');
		return false;
	}

	//PONER COMENTARIOS:
	//llamo al contenedor padre que esta en el html
	var cont = document.getElementById('cont');
	//crea nodos de texto para el textarea desde comment
	var textNewComment = document.createTextNode(comment);
	// crea elemento contenedor p
	var contenedorElemento = document.createElement('p');
	//coloca nodo como hijo del elemento p
	contenedorElemento.appendChild(textNewComment);
	//coloca elemento p como hijo del div newComments
	newComments.appendChild(contenedorElemento);
	// coloca el div newComments como hijo del contenedor padre
	cont.appendChild(newComments);

	//FECHA
	//variable entrega la fecha 
	var today = new Date();
	var dateTweet = today.toLocaleString("en-GB");
	//probando funcionamiento  
	//toLocaleString devuelve la fecha en string
	// seleccina el formato de hora y fecha británicos "en-GB". dd/mm/yy
	console.log(dateTweet); //probando
	//crear nodo de textto
	var nodeDate = document.createTextNode(dateTweet);
	//crear  el elemento p para poner fecha
	var dateP = document.createElement("p");
	//poner clase date
	dateP.setAttribute("class", "date");
	//poner nodo en elemento p
	dateP.appendChild(nodeDate);
	//coloca elemento p como hijo del div newComments
	newComments.appendChild(dateP);
	//tomo todos los elementos de clase date
	var date = document.getElementsByClassName("date");
});

//FUNCION CUENTA REGRESIVA
//llamo al textArea
var textArea = document.getElementById("comment");
//poner focus en el textArea
document.getElementById("comment").focus();
//llamo al contenedor del contador
var contNumber = document.getElementById("count");

//funcion que cuenta los caracteres
function counter() {
	console.log(textArea.value.length); //probando funcionamiento
	//valor máximo de referencia
	var maxChar = 140;
	//variable que recoge el número de caracteres restantes
	var number = maxChar - textArea.value.length;
	contNumber.innerHTML = number;
	console.log(number);

	if (number < 20 && number > 10) {
		contNumber.setAttribute("id", "yellow");
		document.getElementById('btn').disabled = false;
	}
	if (number < 10 && number > 0) {
		contNumber.setAttribute("id", "red");
		document.getElementById('btn').disabled = false;
	}
	if (number < -1) {
		contNumber.setAttribute("class", "contNumber");
		contNumber.setAttribute("id", "red");
		document.getElementById('btn').disabled = true;
		console.log("desactivar boton");
	}
};

//TEXTAREA AJUSTAR ALTURA AUTOMATICA
// funcion para hacer crecer el texarea mientras se escribe
var textarea = document.getElementById("comment"); // tomar textarea
//oninput ejecuta javascript inmediatamente despues de que el textArea recibe datos del usuario
textarea.oninput = function () { 
	// variable vacia que recibe los cambios de tamaño en el textArea
	textarea.style.height = "47px"; 
	// modifica la altura con referencia al tamaño del scroll:
		// textarea.style.heigh: toma la altura del textarea
		//Math.min devuelve el menor de dos numeros entregados:
		//textarea.scrollHeight: entrega el valor de la altura del scroll del textArea
		// 300 valor para límite de altura 
		// px: para tomar lo valores como pixeles
		// altura del textArea en style en html será igual al valor de scrollHeigth en pixeles, con límite de 300.
		//******funciona para el salto de teclado /n
	textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px"; 
};

//HORA Y FECHA DEL TWEET
// funcion para poner la hora y feche en el Tweet
var textarea = document.getElementById("comment"); // tomar textarea
//oninput ejecuta javascript inmediatamente despues de que el textArea recibe datos del usuario
textarea.oninput = function () {
	// variable vacia que recibe los cambios de tamaño en el textArea
	textarea.style.height = "47px";
	textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};
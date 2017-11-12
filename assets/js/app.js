//tomar elemento boton
var btn = document.getElementById("btn");

/*
//Poner contador en html
//crear nodo de texto que tenga la cantidad e letras escritas
var nodeCount = document.createTextNode("280");
//crear elemento donde colocar el nodo contador de letras
var count = document.createElement("p");
//agregar atributo
count.setAttribute("id", "countNumber");
//agregar nodo al elemento p
count.appendChild(nodeCount);
//llamar al div padre addComment
var addComment = document.getElementById("addComment");
// colocar contador en el div comment
addComment.appendChild(count);
*/

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

	//Poner comentarios:
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

	//ciclo  if probando
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



/*
//toma texto ingresado del textarea
var textarea = document.getElementById('comment');

textarea.addEventListener("onkeydown", function () {
	console.log(comment.length);
	//crear nodo de texto que tenga la cantidad e letras escritas
	var nodeCount = document.createTextNode(comment.value.length);
	//crear elemento donde colocar el nodo contador de letras
	var count = document.createElement("p");
	//agregar atributo
	count.setAttribute("id", "countNumber");
	//agregar nodo al elemento p
	count.appendChild(nodeCount);
	//llamar al div padre addComment
	var addComment = document.getElementById("addComment");
	// colocar contador en el div comment
	addComment.appendChild(count);


});
*/

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







//funcion autoinvocada para la hora del tweet
(function () {
	// instantiate a JavaScript Date object
	var NowDate = new Date();
	// display value of Date object in #displayJsDate div
	var eDisplayDate = document.getElementById('cont');
	eDisplayDate.innerHTML = NowDate;
})();


/*
// Función propia que no me resultó
function count() {
	var tweets = document.getElementById('comment').value;
	var characters = document.getElementById("characters");
	var charNumber = tweets.length;
	console.log(charNumber);

	var contChar = document.createElement('p');
	contChar.appendChild(charNumber);
	characters.appendChild(contChar);
}


//insertar función autoejecutable código desde internet que no entendí del todo
(function () {
	var comment = document.getElementById("comment")[0], // toma el elemento id desde el primer indice
		charLeftLabel = "characters", // nombre de la clase para la variable contador de caracteres
		charLeft = document.getElementsByClassName(charLeftLabel)[0],
		maxChar = 140, // máximo de caracteres
		maxCharWarn = 20; //minimo de caracteres

	// muestra los caracteres desde el principio
	charLeft.innerHTML = maxChar; // innerHTML escribe en el html el contador

	// actualiza mientras se tipea
	comment.onkeydown = function () { // onkeydown cuando el usuario aprieta una tecla en textarea
		setTimeout(function () { // setTimeout es un contador de javascript, actualiza la funcion después de un segundo de tipear
			charLeft.innerHTML = maxChar - comment.length; 

			// muestra una advertencia para el contador
			var warnLabel = comment.length >= maxChar - maxCharWarn ? " warning" : "";
			charLeft.className = charLeftLabel + warnLabel;
		}, 1); // segundo estimado para la función setTimeout
	};
})();

*/



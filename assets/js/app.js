function add(){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);

	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);
}
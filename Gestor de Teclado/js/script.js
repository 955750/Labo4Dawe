function inicializarGestores()
{

	var reloj = setInterval(actualizarImagen, 5000);
	var listaImagenes = ["fresas.jpg", "limon.jpg", "mandarinas.jpg", "manzanas.jpg", "melon.jpg", "sesamo.jpg"];
	var indiceImagen = 0;

	var imagen = document.getElementById("imagen");
	imagen.onclick = function()
	{
		// alert("Has pulsado la imagen");
		clearInterval(reloj);
		indiceImagen = 0;
	}

	var usuario = document.getElementById("usuario");
	usuario.value = 'tu@email';

	usuario.onblur = function(){
		if (usuario.value == ''){
			usuario.value = "tu@email";
		}
	}

	usuario.onfocus = function(){
		if (usuario.value == 'tu@email'){
			usuario.value = '';
		}
	}

	var item = document.getElementById("combobox");
	item.addEventListener("change",gestorCombo);

	function gestorCombo(){
		console.log(item.value);
		console.log(item.options[item.selectedIndex].text);
		console.log(item.selectedIndex);
	} 

	var formulario = document.getElementById('formulario');
	formulario.onsubmit = function(){
		console.log("click en submit");
		return false;
	}

	function actualizarImagen() {
		var imagenActual = listaImagenes[indiceImagen];
		imagen.style.backgroundImage = "url(imagenes/" + imagenActual + ")";
		indiceImagen++
		if (indiceImagen > 5) {
			indiceImagen = 0;
		}
	}

	document.addEventListener("keydown", (event) => {
		if (event.code === "ArrowUp") {
			alert("Has pulsado FLECHA ARRIBA")
			event.preventDefault()
		} else if (event.code === "ArrowDown") {
			alert("Has pulsado FLECHA ABAJO")
			event.preventDefault()
		} else if (event.code === "ArrowLeft") {
			alert("Has pulsado FLECHA IZQUIERDA")
			event.preventDefault()
		} else if (event.code === "ArrowRight") {
			alert("Has pulsado FLECHA DERECHA")
			event.preventDefault()
		}
	});
}

window.onload = inicializarGestores;

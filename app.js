let nombres = []; //Esto es un array vacío

// Función para agregar un amigo
function agregarAmigo() 
{
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	if (nombre === "")//Verifica si el campo está vacío
        {
        alert("El campo no puede estar vacio.");
        return;
        }
	if (nombres.includes(nombre)) //Verifica si el nombre ya existe
        {
		alert("Nombre ya regristrado. Intente con uno diferente.");
		return;
	    }
	nombres.push(nombre); //Agrega el nombre al array
	mostrarNombres();
	input.value = "";
}

// Función para mostrar los nombres en la lista
function mostrarNombres() 
{
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = "";
	nombres.forEach((nombre, index) => {
		const li = document.createElement('li');
		li.textContent = nombre;
		lista.appendChild(li);
	});
}

// Función para mostrar un nombre aleatorio
function SortearAmigo() 
{
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    if (nombres.length === 0) // Verifica si hay nombres suficientes
        {
        resultado.innerHTML = '<li>No has ingresado suficientes nombres para sortear.</li>';
        return;
        }
		// Selecciona un nombre aleatorio
    const indice = Math.floor(Math.random() * nombres.length);
    const nombreSorteado = nombres[indice];
    resultado.innerHTML = `<li>Felicidades tu amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}


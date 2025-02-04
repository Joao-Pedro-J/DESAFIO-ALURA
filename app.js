let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo');

    if(amigo.value != ''){
        amigos.push(amigo.value);

        amigo.value = '';

        atualizarListaAmigos();

    }else{
        alert("Por favor, insira um nome!");
    }

    function atualizarListaAmigos(){
    	let lista = document.getElementById('listaAmigos');

    	lista.innerHTML = '';

    	for(let i = 0; i < amigos.length; i++){
    		let elemento = document.createElement('li');

    		let texto = document.createTextNode(amigos[i]);

    		elemento.appendChild(texto);

    		lista.appendChild(elemento);
    	}
    }
}

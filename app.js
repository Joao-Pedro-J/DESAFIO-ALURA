let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo');

    if(amigo.value != ''){
        amigos.push(amigo.value);

        amigo.value = '';


    }else{
        alert("Por favor, insira um nome!");
    }
}

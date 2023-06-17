const divDestino = document.querySelector('div.box');
const inputUser = document.querySelector('div.input input');
const botaoEnviar = document.querySelector('div.input button');
const botaoLimpar = document.querySelector('div.user>button');
const preview = document.querySelector('div.user p');

function adicionarText(){
    if(inputUser.value === ""){
        return;
    }
    
    const novoElem = document.createElement('p');
    divDestino.appendChild(novoElem);

    novoElem.innerHTML = "- " + inputUser.value;
}

function limpar(){
    const listaElem = document.querySelectorAll('div.box p');

    for(let i = 0; i < listaElem.length; i++){
        listaElem[i].parentNode.removeChild(listaElem[i]);
    }
}

function mudarPreview(){
    preview.innerHTML = inputUser.value;
    
    if(inputUser.value === ""){
        preview.innerHTML = "PREVIEW";
    }
}

botaoEnviar.addEventListener('click', adicionarText);
botaoLimpar.addEventListener('click', limpar);
inputUser.addEventListener('input', mudarPreview);
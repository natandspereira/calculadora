function inserirValor(valor){
    const getDisplay = document.getElementById('display'); 
    if(getDisplay.innerText === '0' && valor !== '.'){
        getDisplay.innerText = valor;
    }else{
        getDisplay.innerText += valor;
    }
} 

function limparDisplay(){
    document.getElementById('display').innerText = '0';
}

function calcular(){
    const getDisplay = document.getElementById('display');
    try {
        getDisplay.innerText = eval(getDisplay.innerText);
    } catch (error) {
        getDisplay.innerText = 'Erro';
    }
}

const botoes = document.querySelectorAII("button");
botoes.forEach(function (botao){
    // instruções para cada botão});
    let curtiu = false
    botao.addEventListener("click", botaoClicado)
    function botaoClicado(){
        console.log("fui clicado");
    }

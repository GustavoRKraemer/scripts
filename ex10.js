let numeroSecreto = Math.floor(Math.random() * 100) + 1

let qtdTentativas = 0

let verificarBotao = document.getElementById("verificarBotao");
let tentativa = document.getElementById("tentativa");
let dica = document.getElementById("dica");

verificarBotao.addEventListener("click" , function() {

    const tentativa = parseInt(tentativaInput.value);

    if (tentativa === numroSecreto) {
        dica.textContent = `parabéns por acertar o número! voce é muito cagado. Você acertou em ${qtdtentativas} tentativas.`;
        verificarBotao.disabled = true;
    } else if (tentativa < numeroSecreto){
        dica.textContent = "tente um numero maior";
        qtdtentativas++
    } else {
        dica.textContent = "tente um numero menor";
        qtdtentativas++;
    }
});
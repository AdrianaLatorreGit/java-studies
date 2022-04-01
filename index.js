const almoco = document.getElementById("almoco");
const porcentagem = document.getElementById("porcentagem");
const button = document.getElementById("button");
const valorTotal = document.getElementById("valor-total");

//Calcular porcentagem
const calcularPorcentagem = () => {
    const valorDoAlmoço = Number(almoco.value);
    const valorDaGorjeta = Number(porcentagem.value) / 100;
    const totalDaConta = valorDoAlmoço + valorDoAlmoço * valorDaGorjeta;
    valorTotal.innerText = `Valor Total: R$ ${totalDaConta
        .toFixed(2)
        .replace(".", ",")} Reais`;
    if (totalDaConta == NaN) {
        console.log();
    }

    // console.log(totalDaConta);
};

//Evento de click
button.addEventListener("click", calcularPorcentagem);

async function somar (n1,n2) {
    return n1 + n3;
}

somar(2,4).then(
    (resultado) => {
        console.log("Resultado:", resultado)
    }).cath((erro) => {
        console.log(erro)
    }).finally(() => {
        console.log("Encerrando")
    })
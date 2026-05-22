var contas = [
    {conta: 200},
    {conta: 300},
    {conta: 450},
    {conta: 109}
]


var somaTotal = contas.reduce((soma, contas) => soma + contas.conta, 0)

console.log(somaTotal);

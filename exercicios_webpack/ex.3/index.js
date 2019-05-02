const produto = {
    nome: 'caneta bic preta',
    preco: 1.90,
    desconto:0.05
}

function clone(objeto){
    return { ...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'caneta vermelha'

console.log(produto, novoProduto)
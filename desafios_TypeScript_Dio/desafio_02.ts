
enum Profissao {
    Atriz,
    Padeiro
}

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}

const maria: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
}

const roberto: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
}

const laura: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
}

const carlos: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
}
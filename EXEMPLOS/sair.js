const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'Desenvolvedora',
}

pessoa.idade = 25;


const Cristiano: (nome: string, idade: number, profissao: string) => {
    nome: 'Cristiano',
    idade: 25,
    profissao: 'pintor',
}

const Paula: (nome: string, idade: number, profissao: string) => {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora',
}

enum profissao {
    professora,
    atriz,
    Desenvolvedora,
    jogadoraDefutebol,
}

interface pessoa {
    nome: string,
    idade: number,
    profissao: profissao,
}

interface Estudante extends pessoa {
    materias: string[]
}

const Vanessa: pessoa = {
    nome: Vanessa,
    idade: 23,
    profissao: profissao.Desenvolvedora
}

const Jessica Estudante = {
    nome: 'Jessica',
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materias: ('Matematica discerta, programação')
}

function listar(listar: string[]) {
    for (const item of listar) {
       console.log('-', item);
    }
}

listar(monica.materias);

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let funcionario = {
    codigo: 10,
    nome: 'Jhon'
};


let funcionario: {code: number, name: string} = {
    codigo: 10,
    nome: 'Jhon'
}


interface funcionario {
    codigo: number,
    nome: string
}

let funcionario: funcionario = {
    codigo: 200,
    nome: 'Jhon'
}

const funcionario = {
    codigo: 10,
    nome: 'Cristiano'
}

const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Cristiano'
}

const funcionarioObj = {} as funcionario;
funcionarioObj.codigo = 10,
funcionarioObj.nome = 'Cristiano';

const funcionarioObj2: funcionario = {
    codigo: 10,
    nome: 'Cristiano'
}


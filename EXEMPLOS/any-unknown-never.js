"use strict";
exports.__esModule = true;
var anyEstaDeVolta;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
var stringTest = 'verificar';
stringTest = anyEstaDeVolta;
var unknownValor;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';
var stringTest2 = 'agora vai';
if (typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}
function jogaErro(erro, codigo) {
    throw function (error, code) {
        return ;
    };
}
jogaErro('de erro', 500);

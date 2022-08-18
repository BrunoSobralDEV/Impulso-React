"use strict";
let button = document.querySelector('#button');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
function sum(a, b) {
    return Number(a) + Number(b);
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(sum(Number(input1.value), Number(input2.value)));
        }
    });
}
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Contador"] = 3] = "Contador";
})(Profissao || (Profissao = {}));
const pessoa = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Desenvolvedora,
    materias: ['Informática']
};

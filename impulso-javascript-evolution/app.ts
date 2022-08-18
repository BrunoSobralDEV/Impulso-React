let button = document.querySelector('#button');
let input1 = document.querySelector('#input1') as HTMLInputElement;
let input2 = document.querySelector('#input2') as HTMLInputElement;

function sum (a: number, b: number) {
  return Number(a) + Number(b);
}

if (button) {
  button.addEventListener('click', () => {
    if (input1 && input2) {
      console.log(sum(Number(input1.value), Number(input2.value)));
    }
  })
}

enum Profissao {
  Professora,
  Atriz,
  Desenvolvedora,
  Contador
}

interface Pessoa {
  nome: string, idade: number, profissao: Profissao
}

interface Estudante extends Pessoa {
  materias: string[]
}
const pessoa: Estudante = {
  nome: 'Andre', 
  idade: 25,
  profissao: Profissao.Desenvolvedora,
  materias: ['Informática']
}

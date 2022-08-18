// Como podemos rodar isso em um arquivo .ts sem causar erros? 
interface IEmployee {
  name?: string,
  code?: number
}

let employee: IEmployee = {};

employee.code = 10;
employee.name = "John";
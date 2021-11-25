import aluno from './interfaces/aluno';

function somaTypescript(x: number, y: number): number{
    return x + y;
}

function retornaAluno(): aluno{
    let aluno_aula : aluno = {
        nome: "otavio",
        email: "otaviolube@gmail.com",
        idade: 36,
        data_nascimento: new Date()
    }

    return aluno_aula;
}

somaTypescript(10,20);
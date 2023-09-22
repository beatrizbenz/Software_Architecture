export default class Aluno {
  #turmas = [];

  constructor(first, last, email, senha, ra) {
    this.name {
      first,
        last,
		};
    this.login {
      email,
        senha,
      
		};
    this.ra = ra;
  }

  add_turma(turma) { this.#turmas.push(turma); }

  report() {
    console.log(`Aluno: ${this.name} (RA: ${this.ra})`);
    this.#turmas.forEach((turma) => {
      console.log(`- ${turma.codigo} - Nota: ${turma.nota} - Frequência: ${turma.frequencia} - ${turma.aprovado()}`);
    });
  }
}
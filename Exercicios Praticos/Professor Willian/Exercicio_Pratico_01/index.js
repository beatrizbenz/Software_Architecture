import Aluno from "./modulos/Aluno.js";
import Turma from "./modulos/Turma.js";

let first = "Beatriz",
  last = "Benz";
(email = "beatriz_benz@hotmail.com"), (senha = "123");
(ra = "2102579"), (a = new Aluno({ first, last, email, senha, ra }));

a.add_turma(new Turma({ codigo: "01", nota: 6 }));
a.add_turma(new Turma({ codigo: "02", nota: 5 }));
a.add_turma(new Turma({ codigo: "03", nota: 3 }));

a.add_turma(new TurmaPresencial({ codigo: "01", nota: 6, frequencia: 0.5 }));
a.add_turma(new TurmaPresencial({ codigo: "p3", nota: 3, frequencia: 0.75 }));
a.add_turma(new TurmaPresencial({ codigo: "p4", nota: 9, frequencia: 0.8 }));

a.report();

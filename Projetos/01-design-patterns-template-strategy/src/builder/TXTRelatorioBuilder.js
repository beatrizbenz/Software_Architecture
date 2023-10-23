import RelatorioBuilder from "./RelatorioBuilder";

class TXTRelatorioBuilder extends RelatorioBuilder {
  reportarTXT() {
    // Lógica específica para gerar um relatório TXT

    let result = `Relatório de Nomes de Cidades
  =============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += "* " + this.cidades[i]["Nome"] + "\n";
    }

    return result;
  }
}

export default TXTRelatorioBuilder;

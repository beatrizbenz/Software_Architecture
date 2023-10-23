import RelatorioBuilder from "./RelatorioBuilder";

class JSONRelatorioBuilder extends RelatorioBuilder {
  reportarJSON() {
    // Lógica específica para gerar um relatório JSON
    if (this.cidades) {
      let nomes = this.cidades.map((cidade) => cidade.Nome);
      const json = JSON.stringify(nomes, null, 2);
      console.log("Relatório JSON gerado:\n", json);
    } else {
      console.error("Nenhum dado disponível para gerar relatório JSON.");
    }
  }
}

export default JSONRelatorioBuilder;

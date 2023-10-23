import RelatorioBuilder from "./RelatorioBuilder";

class CSVRelatorioBuilder extends RelatorioBuilder {
  reportarCSV() {
    // Lógica específica para gerar um relatório CSV
    if (this.cidades) {
      let csv = "Nome\n";

      this.cidades.forEach((cidade) => {
        csv += `${cidade.Nome}\n`;
      });

      console.log("Relatório CSV gerado:\n", csv);
    } else {
      console.error("Nenhum dado disponível para gerar relatório CSV.");
    }
  }
}

export default CSVRelatorioBuilder;

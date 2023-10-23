import RelatorioBuilder from "./RelatorioBuilder";

class XMLRelatorioBuilder extends RelatorioBuilder {
  reportarXML() {
    // Lógica específica para gerar um relatório XML
    if (this.cidades) {
      let xml = "<cidades>\n";

      this.cidades.forEach((cidade) => {
        xml += `  <cidade>\n    <nome>${cidade.Nome}</nome>\n  </cidade>\n`;
      });

      xml += "</cidades>";
      console.log("Relatório XML gerado:\n", xml);
    } else {
      console.error(
        "Nenhum dado disponível para gerar relatório XML. Verifique se você leu e analisou os dados."
      );
    }
  }
}

export default XMLRelatorioBuilder;

import RelatorioBuilder from "./RelatorioBuilder";

class UMLRelatorioBuilder extends RelatorioBuilder {
  reportarUML() {
    // Lógica específica para gerar um relatório UML
    if (this.cidades) {
      let uml = "CidadesDiagram\n";

      this.cidades.forEach((cidade) => {
        uml += `  ${cidade.Nome}\n`;
      });

      console.log("Relatório UML gerado:\n", uml);
    } else {
      console.error("Nenhum dado disponível para gerar relatório UML.");
    }
  }
}

export default UMLRelatorioBuilder;

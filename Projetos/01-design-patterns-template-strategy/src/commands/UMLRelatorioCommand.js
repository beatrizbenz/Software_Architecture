import RelatorioCommand from "./RelatorioCommand";

class UMLRelatorioCommand extends RelatorioCommand {
  execute() {
    // Lógica para executar a construção do relatório UML
    this.builder.ler("./data/cidades-2.json").parse().reportarUML();
  }
}

export default UMLRelatorioCommand;

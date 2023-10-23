import RelatorioCommand from "./RelatorioCommand";

class JSONRelatorioCommand extends RelatorioCommand {
  execute() {
    // Lógica para executar a construção do relatório JSON
    this.builder.ler("./data/cidades-2.json").parse().reportarJSON();
  }
}

export default JSONRelatorioCommand;

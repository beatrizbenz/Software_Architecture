import RelatorioCommand from "./RelatorioCommand";

class XMLRelatorioCommand extends RelatorioCommand {
  execute() {
    this.builder.ler("./data/cidades-2.json").parse().reportarXML();
  }
}

export default XMLRelatorioCommand;

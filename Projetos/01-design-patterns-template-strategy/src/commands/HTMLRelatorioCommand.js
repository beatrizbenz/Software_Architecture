import RelatorioCommand from "./RelatorioCommand";

class HTMLRelatorioCommand extends RelatorioCommand {
  execute() {
    this.builder.ler("./data/cidades-2.json").parse().reportarHTML();
  }
}

export default HTMLRelatorioCommand;

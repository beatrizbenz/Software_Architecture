import RelatorioCommand from "./RelatorioCommand";

class TXTRelatorioCommand extends RelatorioCommand {
  execute() {
    this.builder.ler("./data/cidades-2.json").parse().reportarTXT();
  }
}

export default TXTRelatorioCommand;

import RelatorioCommand from "./RelatorioCommand";

class CSVRelatorioCommand extends RelatorioCommand {
  execute() {
    this.builder.ler("./data/cidades-2.json").parse().reportarCSV();
  }
}

export default CSVRelatorioCommand;

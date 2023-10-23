// RelatorioCommand.js
class RelatorioCommand {
  constructor(builder) {
    this.builder = builder;
  }

  execute() {
    try {
      // Leitura do arquivo JSON, analise dos dados e construir o relatório
      this.builder.ler("./data/cidades-2.json"); // Leitura do arquivo
      this.builder.parse(); // Analisa os dados

      // Chamando o método de relatório com base no formato
      this.builder.reportarTXT();
    } catch (error) {
      console.error("Erro ao gerar relatório TXT:", error.message);
    }
  }
}

export default RelatorioCommand;

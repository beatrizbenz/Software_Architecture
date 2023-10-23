// Atualização da classe RelatorioDirector para usar comandos
class RelatorioDirector {
  construirRelatorio(command) {
    command.execute();
  }
}

export default RelatorioDirector;

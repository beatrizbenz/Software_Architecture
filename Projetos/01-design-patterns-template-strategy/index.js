import RelatorioBuilder from "./src/builder/RelatorioBuilder";
import HTMLRelatorioBuilder from "./src/builder/HTMLRelatorioBuilder";
import TXTRelatorioBuilder from "./src/builder/TXTRelatorioBuilder";
import CSVRelatorioBuilder from "./src/builder/CSVRelatorioBuilder";
import XMLRelatorioBuilder from "./src/builder/XMLRelatorioBuilder";
import UMLRelatorioBuilder from "./src/builder/UMLRelatorioBuilder";
import JSONRelatorioBuilder from "./src/builder/JSONRelatorioBuilder";
import RelatorioDirector from "./src/director/RelatorioDirector";
import HTMLRelatorioCommand from "./src/command/HTMLRelatorioCommand";
import TXTRelatorioCommand from "./src/command/TXTRelatorioCommand";
import CSVRelatorioCommand from "./src/command/CSVRelatorioCommand";
import XMLRelatorioCommand from "./src/command/XMLRelatorioCommand";
import UMLRelatorioCommand from "./src/command/UMLRelatorioCommand";
import JSONRelatorioCommand from "./src/command/JSONRelatorioCommand";

const builder = new RelatorioBuilder();
const director = new RelatorioDirector();

const htmlCommand = new HTMLRelatorioCommand(builder);
const txtCommand = new TXTRelatorioCommand(builder);
const csvCommand = new CSVRelatorioCommand(builder);
const xmlCommand = new XMLRelatorioCommand(builder);
const umlCommand = new UMLRelatorioCommand(builder);
const jsonCommand = new JSONRelatorioCommand(builder);

director.construirRelatorio(htmlCommand);
director.construirRelatorio(txtCommand);
director.construirRelatorio(csvCommand);
director.construirRelatorio(xmlCommand);
director.construirRelatorio(umlCommand);
director.construirRelatorio(jsonCommand);

/* ANTIGO

import CidadesHTMLReport from "./src/CidadesHTMLReporter.js";
import CidadesTXTReport from "./src/CidadesTXTReporter.js";

const [cmd, filename, format] = process.argv;

if (format === "html") {
  let reporter = new CidadesHTMLReport();
  reporter.ler("./data/cidades-2.json");
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}
if (format === "txt") {
  let reporter = new CidadesTXTReport();
  reporter.ler("./data/cidades-2.json");
  reporter.parse();
  let html = reporter.reportar();
  console.log(html);
}
//----- Antigo a cima */

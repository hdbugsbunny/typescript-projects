import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summaryConsole = Summary.winAnalysisWithConsole("Man United");
const summaryHTML = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summaryConsole.buildAndPrintReport(matchReader.matches);
summaryHTML.buildAndPrintReport(matchReader.matches);

import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

//* Create an Object That Satisfies The "DataReader" Interface
const csvFileReader = new CsvFileReader("football.csv");

//* Create an Instance of MatchReader And Pass in Something Satisfying The "DataReader" Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

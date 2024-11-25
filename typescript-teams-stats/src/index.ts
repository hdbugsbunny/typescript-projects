import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

//* Create an Object That Satisfies The "DataReader" Interface
const csvFileReader = new CsvFileReader("football.csv");

//* Create an Instance of MatchReader And Pass in Something Satisfying The "DataReader" Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Manchester United won ${manUnitedWins} games.`);

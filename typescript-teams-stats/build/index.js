"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
//* Create an Object That Satisfies The "DataReader" Interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//* Create an Instance of MatchReader And Pass in Something Satisfying The "DataReader" Interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(`Manchester United won ${manUnitedWins} games.`);

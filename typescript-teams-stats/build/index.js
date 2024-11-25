"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const Summary_1 = require("./Summary");
//* Create an Object That Satisfies The "DataReader" Interface
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//* Create an Instance of MatchReader And Pass in Something Satisfying The "DataReader" Interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);

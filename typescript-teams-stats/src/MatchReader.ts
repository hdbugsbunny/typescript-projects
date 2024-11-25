import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

interface DATAREADER {
  read(): void;
  data: string[][];
}

type MATCHDATA = [Date, string, string, number, number, MatchResult, string];

export class MatchReader {
  matches: MATCHDATA[] = [];
  constructor(public reader: DATAREADER) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MATCHDATA => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}

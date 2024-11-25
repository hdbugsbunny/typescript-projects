import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MATCHDATA = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MATCHDATA[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(
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

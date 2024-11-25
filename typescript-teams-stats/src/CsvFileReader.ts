import fs from "fs";
import { MatchResult } from "./MatchResult";

type MATCHDATA = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
  data: MATCHDATA[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MATCHDATA;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
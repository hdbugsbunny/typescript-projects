import { MATCHDATA } from "./MatchData";

export interface ANALYZER {
  run(matches: MATCHDATA[]): string;
}

export interface OUTPUTTARGET {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: ANALYZER, public outputTarget: OUTPUTTARGET) {}

  buildAndPrintReport(matches: MATCHDATA[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

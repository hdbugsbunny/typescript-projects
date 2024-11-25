import { MATCHDATA } from "./MatchData";

export interface ANALYZER {
  run(matches: MATCHDATA[]): string;
}

export interface OUTPUTTARGET {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: ANALYZER, public outputTarget: OUTPUTTARGET) {}
}

import { MATCHDATA } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface ANALYZER {
  run(matches: MATCHDATA[]): string;
}

export interface OUTPUTTARGET {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  static winAnalysisWithConsole(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: ANALYZER, public outputTarget: OUTPUTTARGET) {}

  buildAndPrintReport(matches: MATCHDATA[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

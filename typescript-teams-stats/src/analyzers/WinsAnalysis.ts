import { MATCHDATA } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { ANALYZER } from "../Summary";

export class WinsAnalysis implements ANALYZER {
  constructor(public team: string) {}

  run(matches: MATCHDATA[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `${this.team} won ${wins} games.`;
  }
}

import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const matches = new CsvFileReader("football.csv");
matches.read();
console.log("🚀 ~ matches:", matches.data);

let manUnitedWins = 0;
for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United won ${manUnitedWins} games.`);

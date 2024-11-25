import fs from "fs";

const matches = fs
  .readFileSync("football.csv", { encoding: "utf-8" })
  .split("\n")
  .slice(1)
  .map((row: string): string[] => row.split(","));
console.log("🚀 ~ matches:", matches);

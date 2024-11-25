import { OUTPUTTARGET } from "../Summary";

export class ConsoleReport implements OUTPUTTARGET {
  print(report: string): void {
    console.log(report);
  }
}

import fs from "fs";
import { OUTPUTTARGET } from "../Summary";

export class HtmlReport implements OUTPUTTARGET {
  print(report: string): void {
    const html = `
        <div>
            <h1>Team Stats Report</h1>
            <div>${report}</div>
        </div>
    `;

    fs.writeFileSync("report.html", html);
  }
}

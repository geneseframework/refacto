import fs from 'fs';
import { JscpdReport } from '../../shared/interfaces/jscpd/interfaces/JscpdReport.interface';

export function getJscpdReport(): JscpdReport | undefined {
    let jscpdReport: JscpdReport | undefined = undefined;
    const pathReport =
        '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json';
    if (fs.existsSync(pathReport)) {
        const jsonReport: = JSON.parse(
            fs.readFileSync(pathReport, 'utf8')
        ) as JscpdReport;
    }
    return jscpdReport;
}

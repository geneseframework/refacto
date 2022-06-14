import fs from 'fs';
import { JscpdReport } from '../../../shared/interfaces/JscpdReport.interface';
import { JscpdJson } from '../interfaces/JscpdJson.interface';
import { JscpdJsonStatisticsFormats } from '../interfaces/JscpdJsonStatisticsFormats.interface';
import { JscpdReportItem } from '../../../frontend/jscpd/interfaces/JscpdReportItem.interface';
import { JscpdJsonStatisticsFormatTotal } from '../interfaces/JscpdJsonStatisticsFormatTotal.interface';
import { JscpdJsonStatisticsFormatSources } from '../interfaces/JscpdJsonStatisticsFormatSources.interface';

export function getJscpdReport(): JscpdReport | undefined {
    let jscpdReport: JscpdReport | undefined = undefined;
    const pathReport =
        '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json';
    if (fs.existsSync(pathReport)) {
        const jsonReport: JscpdJson = JSON.parse(
            fs.readFileSync(pathReport, 'utf8')
        ) as JscpdJson;
        jscpdReport = jsonReportMapper(jsonReport);
    }
    return jscpdReport;
}

function jsonReportMapper(jsonReport: JscpdJson): JscpdReport {
    // console.log('jsonReport', jsonReport);
    const formats: JscpdJsonStatisticsFormats = jsonReport.statistics.formats;
    const jscpdReport: JscpdReport = {
        items: [],
    };
    const fileFormats: string[] = Object.keys(formats).sort();
    for (const fileFormat of fileFormats) {
        const sources: JscpdJsonStatisticsFormatSources =
            formats[fileFormat].sources;
        const total: JscpdJsonStatisticsFormatTotal = formats[fileFormat].total;
        const jscpdReportItem: JscpdReportItem = {
            clones: total.clones,
            duplicatedLines: total.duplicatedLines,
            files: Object.keys(sources).length,
            fileFormat,
            lines: total.lines,
        };
        jscpdReport.items.push(jscpdReportItem);
    }
    return jscpdReport;
}

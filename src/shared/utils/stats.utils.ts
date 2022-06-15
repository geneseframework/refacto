// import { JscpdReport } from '../interfaces/jscpd/interfaces/JscpdReport.interface';
// import { JscpdJsonStatistics } from '../interfaces/jscpd/interfaces/JscpdJsonStatistics.interface';
// import { DuplicationStats } from '../interfaces/duplication-stats.interface';
// import { DuplicationStatsItem } from '../interfaces/duplication-stats-item.interface';
//
// export function initStats(coverageReport: JscpdReport): DuplicationStats {
//     const coverageReport: DuplicationStats = {
//         header: { name: '' },
//         types: [],
//     };
//     const jscpdStats: JscpdJsonStatistics = coverageReport.statistics ?? {};
//     coverageReport.header.total = jscpdStats.total.lines;
//     coverageReport.header.duplicates = jscpdStats.total.duplicatedLines;
//     for (let key in jscpdStats.formats) {
//         const duplicationStatsItem: DuplicationStatsItem = { name: key };
//         coverageReport.types.push(duplicationStatsItem);
//         // coverageReport.types.push(
//         //     new DuplicationStatsItem(
//         //         key,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.duplicatedLines,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.lines
//         //     )
//         // );
//     }
//     return coverageReport;
// }

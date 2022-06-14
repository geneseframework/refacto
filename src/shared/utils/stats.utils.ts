// import { JscpdReport } from '../interfaces/jscpd/interfaces/JscpdReport.interface';
// import { JscpdJsonStatistics } from '../interfaces/jscpd/interfaces/JscpdJsonStatistics.interface';
// import { DuplicationStats } from '../interfaces/duplication-stats.interface';
// import { DuplicationStatsItem } from '../interfaces/duplication-stats-item.interface';
//
// export function initStats(jscpdReport: JscpdReport): DuplicationStats {
//     const jscpdReport: DuplicationStats = {
//         header: { name: '' },
//         types: [],
//     };
//     const jscpdStats: JscpdJsonStatistics = jscpdReport.statistics ?? {};
//     jscpdReport.header.total = jscpdStats.total.lines;
//     jscpdReport.header.duplicates = jscpdStats.total.duplicatedLines;
//     for (let key in jscpdStats.formats) {
//         const duplicationStatsItem: DuplicationStatsItem = { name: key };
//         jscpdReport.types.push(duplicationStatsItem);
//         // jscpdReport.types.push(
//         //     new DuplicationStatsItem(
//         //         key,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.duplicatedLines,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.lines
//         //     )
//         // );
//     }
//     return jscpdReport;
// }

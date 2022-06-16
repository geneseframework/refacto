// import { JscpdReport } from '../interfaces/jscpd/interfaces/JscpdReport.interface';
// import { JscpdJsonStatistics } from '../interfaces/jscpd/interfaces/JscpdJsonStatistics.interface';
// import { DuplicationStats } from '../interfaces/duplication-stats.interface';
// import { DuplicationStatsItem } from '../interfaces/duplication-stats-item.interface';
//
// export function initStats(geneseReport: JscpdReport): DuplicationStats {
//     const geneseReport: DuplicationStats = {
//         header: { name: '' },
//         types: [],
//     };
//     const jscpdStats: JscpdJsonStatistics = geneseReport.statistics ?? {};
//     geneseReport.header.total = jscpdStats.total.lines;
//     geneseReport.header.duplicates = jscpdStats.total.duplicatedLines;
//     for (let key in jscpdStats.formats) {
//         const duplicationStatsItem: DuplicationStatsItem = { name: key };
//         geneseReport.types.push(duplicationStatsItem);
//         // geneseReport.types.push(
//         //     new DuplicationStatsItem(
//         //         key,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.duplicatedLines,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.lines
//         //     )
//         // );
//     }
//     return geneseReport;
// }

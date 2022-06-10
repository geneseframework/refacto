// import { JscpdReport } from '../interfaces/jscpd/interfaces/JscpdReport.interface';
// import { JscpdStats } from '../interfaces/jscpd/interfaces/JscpdStats.interface';
// import { DuplicationStats } from '../interfaces/duplication-stats.interface';
// import { DuplicationStatsItem } from '../interfaces/duplication-stats-item.interface';
//
// export function initStats(jscpdReport: JscpdReport): DuplicationStats {
//     const duplicationStats: DuplicationStats = {
//         header: { name: '' },
//         types: [],
//     };
//     const jscpdStats: JscpdStats = jscpdReport.statistics ?? {};
//     duplicationStats.header.total = jscpdStats.total.lines;
//     duplicationStats.header.duplicates = jscpdStats.total.duplicatedLines;
//     for (let key in jscpdStats.formats) {
//         const duplicationStatsItem: DuplicationStatsItem = { name: key };
//         duplicationStats.types.push(duplicationStatsItem);
//         // duplicationStats.types.push(
//         //     new DuplicationStatsItem(
//         //         key,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.duplicatedLines,
//         //         jscpdStats.formats[key as JsOrTsFileExtension].total.lines
//         //     )
//         // );
//     }
//     return duplicationStats;
// }

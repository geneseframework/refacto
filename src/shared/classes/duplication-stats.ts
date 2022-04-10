import { DuplicationStatsItem } from './duplication-stats-item';
import { JscpdReport } from '../../features/jscpd/interfaces/JscpdReport.interface';
import { JscpdStats } from '../../features/jscpd/interfaces/JscpdStats.interface';
import { FileFormat } from '../../features/jscpd/types/FileFormat.type';

export class DuplicationStats {
    header: DuplicationStatsItem;
    types: DuplicationStatsItem[];

    constructor(header = new DuplicationStatsItem('Duplicated lines'), types: DuplicationStatsItem[] = []) {
        this.header = header;
        this.types = types;
    }

    init(jscpdReport: JscpdReport): void {
        const stats: JscpdStats = jscpdReport.statistics;
        if (stats) {
            this.header.total = stats.total.lines;
            this.header.duplicates = stats.total.duplicatedLines;
            for (let key in stats.formats) {
                this.types.push(new DuplicationStatsItem(key, stats.formats[key as FileFormat].total.duplicatedLines, stats.formats[key as FileFormat].total.lines))
            }
        }
    }
}

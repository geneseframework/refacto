import { DuplicationStatsItem } from './duplication-stats-item.interface';

export interface DuplicationStats {
    header: DuplicationStatsItem;
    types: DuplicationStatsItem[];
}

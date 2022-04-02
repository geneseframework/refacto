import { JscpdDuplicate } from './JscpdDuplicate.interface';
import { JscpdStats } from './JscpdStats.interface';

export interface JscpdReport {
    duplicates: JscpdDuplicate[];
    statistics: JscpdStats;
}

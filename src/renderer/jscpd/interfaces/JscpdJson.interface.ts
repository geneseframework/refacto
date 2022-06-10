import { JscpdJsonDuplicates } from './JscpdJsonDuplicate.interface';
import { JscpdJsonStatistics } from './JscpdJsonStatistics.interface';

export interface JscpdJson {
    duplicates: JscpdJsonDuplicates;
    statistics: JscpdJsonStatistics;
}

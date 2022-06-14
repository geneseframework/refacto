import { JscpdJsonStatisticsFormats } from './JscpdJsonStatisticsFormats.interface';
import { JscpdJsonStatisticsFormatTotal } from './JscpdJsonStatisticsFormatTotal.interface';

export interface JscpdJsonStatistics {
    detectionDate: string;
    formats: JscpdJsonStatisticsFormats;
    total: JscpdJsonStatisticsFormatTotal;
}

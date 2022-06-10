import { JscpdJsonStatisticsFormats } from './JscpdJsonStatisticsFormats.interface';
import { JscpdJsonStatisticsFormatSourceValues } from './JscpdJsonStatisticsFormatSourceValues.interface';

export interface JscpdJsonStatistics {
    detectionDate: string;
    formats: JscpdJsonStatisticsFormats;
    total: JscpdJsonStatisticsFormatSourceValues;
}

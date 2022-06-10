import { JscpdJsonStatisticsFormatSources } from './JscpdJsonStatisticsFormatSources.interface';
import { JscpdJsonStatisticsFormatSourceValues } from './JscpdJsonStatisticsFormatSourceValues.interface';

export interface JscpdJsonStatisticsFormat {
    sources: JscpdJsonStatisticsFormatSources;
    total: JscpdJsonStatisticsFormatSourceValues;
}

import { JscpdJsonStatisticsFormatSources } from './JscpdJsonStatisticsFormatSources.interface';
import { JscpdJsonStatisticsFormatTotal } from './JscpdJsonStatisticsFormatTotal.interface';

export interface JscpdJsonStatisticsFormat {
    sources: JscpdJsonStatisticsFormatSources;
    total: JscpdJsonStatisticsFormatTotal;
}

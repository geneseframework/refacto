import { JscpdStatsSource } from './JscpdStatsSource.interface';
import { JscpdStatsValues } from './JscpdStatsValues.interface';

export interface JscpdStatsFileFormat {
    sources: JscpdStatsSource;
    total: JscpdStatsValues;
}

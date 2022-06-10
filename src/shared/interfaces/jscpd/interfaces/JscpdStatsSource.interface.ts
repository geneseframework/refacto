import { JscpdStatsValues } from './JscpdStatsValues.interface';

export interface JscpdStatsSource {
    [path: string]: JscpdStatsValues;
}

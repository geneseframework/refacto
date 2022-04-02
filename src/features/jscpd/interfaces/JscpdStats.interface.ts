import { JscpdStatsFormat } from './JscpdStatsFormat.interface';
import { JscpdStatsValues } from './JscpdStatsValues.interface';

export interface JscpdStats {
    detectionDate: string;
    formats: JscpdStatsFormat;
    total: JscpdStatsValues;
}

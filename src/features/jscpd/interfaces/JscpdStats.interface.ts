import { JscpdStatsFormat } from './JscpdStatsFormat.interface';

export interface JscpdStats {
    detectionDate: string;
    formats: JscpdStatsFormat[];
    total: any;
}

import { FileFormat } from '../types/FileFormat.type';
import { JscpdStatsFileFormat } from './JscpdStatsFileFormat.interface';

export type JscpdStatsFormat = {
    [key in FileFormat]: JscpdStatsFileFormat;
};

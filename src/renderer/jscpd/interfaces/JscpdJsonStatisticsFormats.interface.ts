import { JscpdJsonStatisticsFormat } from './JscpdJsonStatisticsFormat.interface';
import { JscpdJsonFileFormat } from '../types/JscpdJsonFileFormat.type';

export type JscpdJsonStatisticsFormats = {
    [fileFormat in JscpdJsonFileFormat]: JscpdJsonStatisticsFormat;
};

import { JsOrTsFileExtension } from '../types/JsOrTsFileExtension.type';
import { JscpdStatsFileFormat } from './JscpdStatsFileFormat.interface';

export type JscpdStatsFormat = {
    [key in JsOrTsFileExtension]: JscpdStatsFileFormat;
};

import { JscpdJsonDuplicatedFile } from './JscpdJsonDuplicatedFile.interface';
import { JscpdJsonFileFormat } from '../types/JscpdJsonFileFormat.type';

export interface JscpdJsonDuplicates {
    firstFile: JscpdJsonDuplicatedFile;
    format: JscpdJsonFileFormat;
    fragment: string;
    lines: number;
    secondFile: JscpdJsonDuplicatedFile;
    tokens: number;
}

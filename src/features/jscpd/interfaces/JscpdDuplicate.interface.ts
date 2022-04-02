import { FileFormat } from '../types/FileFormat.type';
import { JscpdDuplicatedFile } from './JscpdDuplicatedFile.interface';

export interface JscpdDuplicate {
    firstFile: JscpdDuplicatedFile;
    format: FileFormat;
    fragment: string;
    lines: number;
    secondFile: JscpdDuplicatedFile;
    tokens: number;
}

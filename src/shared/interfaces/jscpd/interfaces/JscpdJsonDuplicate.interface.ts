import { JsOrTsFileExtension } from '../types/JsOrTsFileExtension.type';
import { JscpdJsonDuplicatedFile } from './JscpdJsonDuplicatedFile.interface';

export interface JscpdJsonDuplicates {
    firstFile: JscpdJsonDuplicatedFile;
    format: JsOrTsFileExtension;
    fragment: string;
    lines: number;
    secondFile: JscpdJsonDuplicatedFile;
    tokens: number;
}

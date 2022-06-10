import { JscpdJsonDuplicatedFileLoc } from './JscpdJsonDuplicatedFileLoc.interface';

export interface JscpdJsonDuplicatedFile {
    end: number;
    endLoc: JscpdJsonDuplicatedFileLoc;
    name: string;
    start: number;
    startLoc: JscpdJsonDuplicatedFileLoc;
}

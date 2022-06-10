import { JscpdDuplicatedFileLoc } from './JscpdDuplicatedFileLoc.interface';

export interface JscpdJsonDuplicatedFile {
    end: number;
    endLoc: JscpdDuplicatedFileLoc;
    name: string;
    start: number;
    startLoc: JscpdDuplicatedFileLoc;
}

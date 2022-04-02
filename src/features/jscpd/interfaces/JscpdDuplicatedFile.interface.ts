import { JscpdDuplicatedFileLoc } from './JscpdDuplicatedFileLoc.interface';

export interface JscpdDuplicatedFile {
    end: number;
    endLoc: JscpdDuplicatedFileLoc;
    name: string;
    start: number;
    startLoc: JscpdDuplicatedFileLoc;
}

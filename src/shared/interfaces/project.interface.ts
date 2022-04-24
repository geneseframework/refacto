import { Stats } from './stats.interface';

export interface Project {
    name: string;
    pathFolderToAnalyse: string;
    pathRoot: string;
    stats?: Stats;
}

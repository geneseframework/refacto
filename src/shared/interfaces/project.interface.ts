import { Stats } from './stats.interface';

export interface Project {
    name: string;
    pathFolderToAnalyse: string;
    pathReports: string;
    pathRoot: string;
    stats?: Stats;
}

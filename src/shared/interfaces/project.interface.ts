import { Stats } from './stats.interface';
import { Tool } from './tool.interface';

export interface Project {
    geneseCommand: string;
    jestCommand: string;
    jscpdCommand: string;
    name: string;
    pathFolderToAnalyse: string;
    pathReports: string;
    pathRoot: string;
    stats?: Stats;
    tools?: Tool[];
}

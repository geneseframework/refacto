import { Stats } from './Stats.interface';
import { Tool } from './Tool.interface';

export interface Project {
    geneseCommand: string;
    jestCommand: string;
    jscpdCommand: string;
    name: string;
    pathFolderToAnalyse: string;
    pathReports: string;
    pathRoot: string;
    stats: Stats;
    tools?: Tool[];
}

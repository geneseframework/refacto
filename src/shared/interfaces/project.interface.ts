import { Stats } from './stats.interface';
import { Tool } from './tool.interface';

export interface Project {
    name: string;
    pathFolderToAnalyse: string;
    pathReports: string;
    pathRoot: string;
    stats: Stats;
    tools: Tool[];
}

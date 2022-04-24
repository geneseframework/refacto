import { Stats } from './stats.interface';
import { ProjectTool } from './projectTool.interface';

export interface Project {
    name: string;
    pathFolderToAnalyse: string;
    pathReports: string;
    pathRoot: string;
    projectTools: ProjectTool[];
    stats: Stats;
}

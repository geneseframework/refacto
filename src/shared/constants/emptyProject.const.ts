import { Project } from '../interfaces/project.interface';

export const EMPTY_PROJECT: Project = {
    name: '',
    pathFolderToAnalyse: './src',
    pathReports: './reports',
    pathRoot: '',
    projectTools: [],
    stats: {},
};

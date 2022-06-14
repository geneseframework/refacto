import { Project } from '../interfaces/Project.interface';

export const EMPTY_PROJECT: Project = {
    geneseCommand: 'genese cpx ./src',
    jestCommand: 'jest --coverage',
    jscpdCommand: 'jscpd src -o reports/jscpd -r html',
    name: '',
    pathFolderToAnalyse: './src',
    pathReports: './reports',
    pathRoot: '',
    tools: [],
    stats: {},
};

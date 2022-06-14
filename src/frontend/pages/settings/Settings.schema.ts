import * as Yup from 'yup';

export const settingsSchema = Yup.object({
    geneseCommand: Yup.string(),
    jestCommand: Yup.string(),
    jscpdCommand: Yup.string(),
    name: Yup.string().required('The name of the project is required'),
    pathFolderToAnalyse: Yup.string().required(
        'The path of the folder to analyze is required. Ex: ./src'
    ),
    pathReports: Yup.string().required(
        'The path of the folder of the reports is required. Ex: ./reports'
    ),
    pathRoot: Yup.string().required(
        'The path of the root of the project is required'
    ),
});

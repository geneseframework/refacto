import * as Yup from 'yup';

export const settingsSchema = Yup.object({
    name: Yup.string().required('The name of the project is required'),
    pathRoot: Yup.string().required(
        'The path of the root of the project is required'
    ),
    pathFolderToAnalyse: Yup.string().required(
        'The path of the folder to analyze is required (relative to the root of the project). Ex: ./src'
    ),
});

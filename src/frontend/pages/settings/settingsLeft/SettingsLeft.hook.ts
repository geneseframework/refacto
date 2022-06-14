import { SettingsLeftProps } from './SettingsLeft';
import { Project } from '../../../../shared/interfaces/Project.interface';

export const useSettingsLeft = (props: SettingsLeftProps) => {
    const { changeProjectFormValues, openNewProjectForm } = props;
    const clickOnPlus = () => {
        changeProjectFormValues({
            name: '',
            pathFolderToAnalyse: '',
            pathRoot: '',
            jscpdCommand: '',
            jestCommand: '',
            geneseCommand: '',
            pathReports: '',
        });
        openNewProjectForm();
    };

    const handleClickOnItem = (project: Project) => {
        changeProjectFormValues(project);
    };

    return {
        ...props,
        clickOnPlus,
        handleClickOnItem,
    };
};

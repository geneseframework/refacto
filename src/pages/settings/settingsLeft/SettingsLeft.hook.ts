import { SettingsLeftProps } from '../components/settingsLeft/SettingsLeft';
import { Project } from '../../../shared/interfaces/project.interface';

export const useSettingsLeft = (props: SettingsLeftProps) => {
    const { changeProjectFormValues, openNewProjectForm } = props;
    const clickOnPlus = () => {
        changeProjectFormValues({ name: '', path: '' });
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

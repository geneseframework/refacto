import { SettingsLeftProps } from './SettingsLeft';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useSettingsLeft = (props: SettingsLeftProps) => {
    const { changeProjectFormValues, addProject } = props;
    const clickOnPlus = () => {
        changeProjectFormValues({ name: '', path: '' });
        addProject();
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

import { SettingsLeftProps } from './SettingsLeft';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useSettingsLeft = (props: SettingsLeftProps) => {
    const { changeProjectFormValues } = props;
    const addProject = () => {
        changeProjectFormValues({ name: '', path: '' });
    };

    const handleClickOnItem = (project: Project) => {
        console.log('LEFT', project);
        changeProjectFormValues(project);
    };

    return {
        ...props,
        addProject,
        handleClickOnItem,
    };
};

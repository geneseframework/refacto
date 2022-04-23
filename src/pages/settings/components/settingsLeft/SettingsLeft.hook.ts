import { SettingsLeftProps } from './SettingsLeft';

export const useSettingsLeft = (props: SettingsLeftProps) => {
    const { handleClickOnNewProject } = props;
    const addProject = () => {
        handleClickOnNewProject();
    };
    return {
        ...props,
        addProject,
    };
};

import { SettingsLeftProjectItemProps } from './SettingsLeftProjectItem';

export const useSettingsLeftProjectItem = (
    props: SettingsLeftProjectItemProps
) => {
    const { project, changeProjectFormValues } = props;
    const changeCurrentProjectAndUpdateSettingsFormProject = () => {
        changeProjectFormValues(project);
    };
    return {
        ...props,
        changeCurrentProjectAndUpdateSettingsFormProject,
    };
};

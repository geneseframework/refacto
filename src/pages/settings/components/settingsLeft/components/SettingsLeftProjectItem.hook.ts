import { SettingsLeftProjectItemProps } from './SettingsLeftProjectItem';
import { store } from '../../../../../renderer/App';
import { API } from '../../../../../shared/enums/api.enum';

export const useSettingsLeftProjectItem = (
    props: SettingsLeftProjectItemProps
) => {
    const { project, changeProjectFormValues } = props;
    const changeCurrentProjectAndUpdateSettingsFormProject = () => {
        store.set(API.SETTINGS_FORM_PROJECT, project);
        console.log('ITEM ', project);
        changeProjectFormValues(project);
    };
    return {
        ...props,
        changeCurrentProjectAndUpdateSettingsFormProject,
    };
};

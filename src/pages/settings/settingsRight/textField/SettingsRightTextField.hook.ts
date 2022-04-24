import { SettingsRightTextFieldProps } from './SettingsRightTextField';

export const useSettingsRightTextField = (
    props: SettingsRightTextFieldProps
) => {
    const { flex } = props;
    const flexLeft = flex ?? 10;
    return {
        ...props,
        flexLeft,
    };
};

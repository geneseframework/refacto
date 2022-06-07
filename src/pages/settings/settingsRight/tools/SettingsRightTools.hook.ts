import { SettingsRightToolsProps } from './SettingsRightTools';
import { getTools } from '../../../../shared/store/tools.store';
import { Tool } from '../../../../shared/interfaces/tool.interface';

export const useSettingsRightTools = (props: SettingsRightToolsProps) => {
    const { formik } = props;
    console.log('formik', formik);
    // console.log('tools', getTools());
    const tools: Tool[] = getTools();
    return {
        ...props,
        tools,
    };
};

import { SettingsRightToolsProps } from './SettingsRightTools';
import { getTools } from '../../../../../shared/store/tools.store';

export const useSettingsRightTools = (props: SettingsRightToolsProps) => {
    const {} = props;
    console.log('tools', getTools());
    return {
        ...props,
    };
};

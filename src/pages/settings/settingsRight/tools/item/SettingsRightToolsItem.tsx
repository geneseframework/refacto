import { useSettingsRightToolsItem } from './SettingsRightToolsItem.hook';
import React from 'react';
import { Tool } from '../../../../../shared/interfaces/tool.interface';

export interface SettingsRightToolsItemProps {
    tool: Tool;
}

export const SettingsRightToolsItem: React.FC<SettingsRightToolsItemProps> = (
    props
) => {
    const h = useSettingsRightToolsItem(props);
    return (
        <div className="toolsItemContainer">
            <div>{h.tool.name}</div>
        </div>
    );
};

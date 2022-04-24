import { useSettingsRightToolsItem } from './SettingsRightToolsItem.hook';
import React from 'react';
import { Tool } from '../../../../../shared/interfaces/tool.interface';
import './SettingsRightToolsItem.scss';
import { SettingsRightTextField } from '../../textField/SettingsRightTextField';
import { JSCPD_TOOL } from '../../../../../shared/constants/jscpdTool.const';

export interface SettingsRightToolsItemProps {
    formik: any;
    tool: Tool;
}

export const SettingsRightToolsItem: React.FC<SettingsRightToolsItemProps> = (
    props
) => {
    const h = useSettingsRightToolsItem(props);
    return (
        <div className="toolsItemContainer">
            <div className="toolName">{h.tool.name}</div>
            <SettingsRightTextField
                fieldName="command"
                formik={h.formik}
                label="Command line"
                placeholder={JSCPD_TOOL.command}
            />
        </div>
    );
};

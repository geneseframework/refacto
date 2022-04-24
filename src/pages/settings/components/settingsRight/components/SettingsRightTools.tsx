import React from 'react';
import { useSettingsRightTools } from './SettingsRightTools.hook';

export interface SettingsRightToolsProps {
    formik: any;
}

export const SettingsRightTools: React.FC<SettingsRightToolsProps> = (
    props
) => {
    const h = useSettingsRightTools(props);

    return (
        <div className="toolsContainer">
            <div className="subTitle">Tools</div>
        </div>
    );
};

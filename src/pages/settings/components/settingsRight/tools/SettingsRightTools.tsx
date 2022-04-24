import React from 'react';
import './SettingsRightTools.scss';
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
            <>
                {h.tools.map((t, index) => {
                    return <div>{t.name}</div>;
                })}
            </>
        </div>
    );
};

import React from 'react';
import './SettingsRightTools.scss';
import { useSettingsRightTools } from './SettingsRightTools.hook';
import { SettingsRightToolsItem } from './item/SettingsRightToolsItem';

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
                    return (
                        <SettingsRightToolsItem
                            key={`tool-${index}`}
                            tool={t}
                            formik={h.formik}
                        />
                    );
                })}
            </>
        </div>
    );
};

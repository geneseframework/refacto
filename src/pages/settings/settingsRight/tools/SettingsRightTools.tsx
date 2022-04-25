import React from 'react';
import './SettingsRightTools.scss';
import { useSettingsRightTools } from './SettingsRightTools.hook';
import { SettingsRightTextField } from '../textField/SettingsRightTextField';

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
            {h.tools.map((t, index) => {
                return (
                    <>
                        <div className="toolName">{t.name}</div>
                        <SettingsRightTextField
                            key={`tool-${index}`}
                            formik={h.formik}
                            label={`Command line for ${t.name}`}
                            fieldName={`${t.name}Command`}
                            placeholder="./reports"
                        />
                    </>
                );
            })}
        </div>
    );
};

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
                // console.log('TOOL : ', t);
                console.log('h.formik.values : ', h.formik.values);
                // console.log('fieldName : ', `${t.label}Command`);
                return (
                    <>
                        <div className="toolName">{t.name}</div>
                        <SettingsRightTextField
                            key={`tool-${index}`}
                            formik={h.formik}
                            placeholder={t.command}
                            fieldName={`${t.label}Command`}
                            label={`${t.name} command`}
                        />
                    </>
                );
            })}
        </div>
    );
};

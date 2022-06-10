import React from 'react';
import './SettingsRightTextField.scss';
import { TextField } from '@mui/material';
import { useSettingsRightTextField } from './SettingsRightTextField.hook';

export interface SettingsRightTextFieldProps {
    fieldName: string;
    flex?: number;
    formik: any;
    label: string;
    placeholder: string;
}

export const SettingsRightTextField: React.FC<SettingsRightTextFieldProps> = (
    props
) => {
    const h = useSettingsRightTextField(props);

    return (
        <div className="formRow">
            <TextField
                sx={{ flex: h.flexLeft }}
                id={h.fieldName}
                name={h.fieldName}
                label={h.label}
                size="small"
                required
                value={h.formik.values[h.fieldName]}
                error={
                    h.formik.touched[h.fieldName] &&
                    Boolean(h.formik.errors[h.fieldName])
                }
                placeholder={h.placeholder}
                helperText={
                    h.formik.touched[h.fieldName] &&
                    h.formik.errors[h.fieldName]
                }
                onChange={h.formik.handleChange(h.fieldName)}
                onBlur={h.formik.handleBlur(h.fieldName)}
            />
            {h.flex && <div className="flexRightDiv" />}
        </div>
    );
};

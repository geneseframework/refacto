import React from 'react';
import './SettingsRight.scss';
import { Button } from '@mui/material';
import { useSettingsRight } from './SettingsRight.hook';
import { Project } from '../../../shared/interfaces/project.interface';
import { Delete } from '@mui/icons-material';
import { SettingsRightTextField } from './textField/SettingsRightTextField';

export interface SettingsRightProps {
    handleCreateProject: (newProject: Project) => any;
    handleUpdateProject: (updatedProject: Project) => void;
    isNewProject: boolean;
    onDelete: () => void;
    projectFormValues: Project;
}

export const SettingsRight: React.FC<SettingsRightProps> = (props) => {
    const h = useSettingsRight(props);

    return (
        <div className="rightContainer">
            <>
                <div className="header">
                    <div className="title">{h.formik.values.name}</div>
                    <div className="icon">
                        {!h.isNewProject && (
                            <Delete onClick={h.handleClickOnDelete} />
                        )}
                    </div>
                </div>
                <form onSubmit={h.formik.handleSubmit}>
                    <SettingsRightTextField
                        formik={h.formik}
                        label="name"
                        fieldName="name"
                        placeholder="The name of the project"
                        flex={0.6}
                    />
                    <SettingsRightTextField
                        formik={h.formik}
                        label="Path of the root of the project"
                        fieldName="pathRoot"
                        placeholder="The path of the root of the project"
                    />
                    <SettingsRightTextField
                        formik={h.formik}
                        label="Path of the folder to analyse (path relative to the root of the project)"
                        fieldName="pathFolderToAnalyse"
                        placeholder="./src"
                    />
                    <SettingsRightTextField
                        formik={h.formik}
                        label="Path of the folder containing the reports (path relative to the root of the project)"
                        fieldName="pathReports"
                        placeholder="./reports"
                    />
                    <div className="separator" />
                    <div className="toolsContainer">
                        <div className="subTitle">Tools</div>
                        {h.tools.map((t, index) => {
                            // console.log('TOOL : ', t);
                            // console.log('fieldName : ', `${t.label}Command`);
                            return (
                                <>
                                    {/*<div className="toolName">{t.name}</div>*/}
                                    <SettingsRightTextField
                                        // key={`tool-${index}`}
                                        formik={h.formik}
                                        placeholder={t.command}
                                        fieldName={`${t.label}Command`}
                                        label={`${t.name} command`}
                                    />
                                </>
                            );
                        })}
                    </div>
                    {/*<SettingsRightTools formik={h.formik} />*/}
                    <div className="divSubmit">
                        <Button
                            disabled={!h.formik.isValid}
                            variant="contained"
                            type="submit"
                            sx={{ marginRight: 5 }}
                        >
                            {h.submitButtonText}
                        </Button>
                        <Button
                            disabled={!(h.formik.dirty || h.isNewProject)}
                            variant="contained"
                            color="inherit"
                            onClick={h.onCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </>
        </div>
    );
};

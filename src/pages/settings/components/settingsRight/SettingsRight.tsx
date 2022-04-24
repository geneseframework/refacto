import React from 'react';
import './SettingsRight.scss';
import { Button, TextField } from '@mui/material';
import { useSettingsRight } from './SettingsRight.hook';
import { Project } from '../../../../shared/interfaces/project.interface';
import { Delete } from '@mui/icons-material';

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
                    <div className="formRow">
                        <TextField
                            sx={{ flex: 4 }}
                            id="name"
                            name="name"
                            label="Name"
                            size="small"
                            required
                            value={h.formik.values.name}
                            error={
                                h.formik.touched.name &&
                                Boolean(h.formik.errors.name)
                            }
                            placeholder="The name of the project"
                            helperText={
                                h.formik.touched.name && h.formik.errors.name
                            }
                            onChange={h.formik.handleChange('name')}
                            onBlur={h.formik.handleBlur('name')}
                        />
                        <div className="flex7" />
                    </div>
                    <div className="formRow">
                        <TextField
                            sx={{ flex: 10 }}
                            required
                            name="pathRoot"
                            label="Path of the root of the project"
                            size="small"
                            value={h.formik.values.pathRoot}
                            error={
                                h.formik.touched.pathRoot &&
                                Boolean(h.formik.errors.pathRoot)
                            }
                            placeholder="The path of the root of the project"
                            helperText={
                                h.formik.touched.pathRoot &&
                                h.formik.errors.pathRoot
                            }
                            onChange={h.formik.handleChange('pathRoot')}
                            onBlur={h.formik.handleBlur('pathRoot')}
                        />
                    </div>
                    <div className="formRow">
                        <TextField
                            sx={{ flex: 10 }}
                            required
                            name="pathFolderToAnalyse"
                            label="Path of the folder to analyse (relative to the root of the project)"
                            size="small"
                            value={h.formik.values.pathFolderToAnalyse}
                            error={
                                h.formik.touched.pathFolderToAnalyse &&
                                Boolean(h.formik.errors.pathFolderToAnalyse)
                            }
                            placeholder="./src"
                            helperText={
                                h.formik.touched.pathFolderToAnalyse &&
                                h.formik.errors.pathFolderToAnalyse
                            }
                            onChange={h.formik.handleChange(
                                'pathFolderToAnalyse'
                            )}
                            onBlur={h.formik.handleBlur('pathFolderToAnalyse')}
                        />
                    </div>
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

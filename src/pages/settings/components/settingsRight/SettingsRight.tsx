import React from 'react';
import './SettingsRight.scss';
import { Button, TextField } from '@mui/material';
import { useSettingsRight } from './SettingsRight.hook';
import { Project } from '../../../../shared/interfaces/project.interface';
import { Delete } from '@mui/icons-material';

export interface SettingsRightProps {
    handleCreateProject: (newProject: Project) => any;
    handleUpdateProjects: (
        updatedCurrentProject: Project,
        updatedProjects: Project[]
    ) => void;
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
                    <div className="deleteIcon">
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
                            value={h.formik.values.name}
                            error={
                                h.formik.touched.name &&
                                Boolean(h.formik.errors.name)
                            }
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
                            name="path"
                            label="Path"
                            size="small"
                            value={h.formik.values.path}
                            error={
                                h.formik.touched.path &&
                                Boolean(h.formik.errors.path)
                            }
                            helperText={
                                h.formik.touched.path && h.formik.errors.path
                            }
                            onChange={h.formik.handleChange('path')}
                            onBlur={h.formik.handleBlur('path')}
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

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../shared/interfaces/project.interface';
import { settingsSchema } from '../Settings.schema';
import { EMPTY_PROJECT } from '../../../shared/constants/emptyProject.const';

export const useSettingsRight = (props: SettingsRightProps) => {
    const {
        onDelete,
        projectFormValues,
        isNewProject,
        handleCreateProject,
        handleUpdateProject,
    } = props;
    const [initialValues, setInitialValues] =
        useState<Project>(projectFormValues);

    useEffect(() => {
        formik.resetForm({
            values: {
                geneseCommand: projectFormValues.geneseCommand,
                jestCommand: projectFormValues.jestCommand,
                jscpdCommand: projectFormValues.jscpdCommand,
                name: projectFormValues.name,
                pathFolderToAnalyse: projectFormValues.pathFolderToAnalyse,
                pathReports: projectFormValues.pathReports,
                pathRoot: projectFormValues.pathRoot,
            },
        });
    }, [setInitialValues, projectFormValues]);

    useEffect(() => {}, [isNewProject]);

    const clonedProject: Project = { ...projectFormValues };
    const submitButtonText: string = isNewProject ? 'ADD' : 'UPDATE';

    const onCancel = () => {
        formik.resetForm({
            values: {
                geneseCommand: clonedProject.geneseCommand,
                jestCommand: clonedProject.jestCommand,
                jscpdCommand: clonedProject.jscpdCommand,
                name: clonedProject.name,
                pathFolderToAnalyse: clonedProject.pathFolderToAnalyse,
                pathReports: clonedProject.pathReports,
                pathRoot: clonedProject.pathRoot,
            },
        });
    };

    const onSubmit = () => {
        if (isNewProject) {
            handleCreateProject(formik.values);
        } else {
            handleUpdateProject(formik.values);
        }
    };

    const handleClickOnDelete = () => {
        formik.setValues(EMPTY_PROJECT);
        onDelete();
    };

    const formik = useFormik({
        initialValues,
        validationSchema: settingsSchema,
        onSubmit,
        validateOnMount: true,
    });

    return {
        ...props,
        formik,
        handleClickOnDelete,
        initialValues,
        onCancel,
        submitButtonText,
    };
};

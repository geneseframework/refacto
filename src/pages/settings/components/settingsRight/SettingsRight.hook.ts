import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../../shared/interfaces/project.interface';
import { settingsSchema } from '../../Settings.schema';
import { EMPTY_PROJECT } from '../../../../shared/constants/emptyProject.const';

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
                name: projectFormValues.name,
                pathFolderToAnalyse: projectFormValues.pathFolderToAnalyse,
                pathRoot: projectFormValues.pathRoot,
            },
        });
    }, [setInitialValues, projectFormValues]);

    useEffect(() => {}, [isNewProject]);

    const clonedProject: Project = { ...projectFormValues };
    const submitButtonText: string = isNewProject ? 'ADD' : 'UPDATE';
    // const validationSchema = Yup.object({
    //     name: Yup.string().required('The name of the project is required'),
    //     pathRoot: Yup.string().required(
    //         'The path of the root of the project is required'
    //     ),
    //     pathFolderToAnalyse: Yup.string().required(
    //         'The path of the folder to analyze is required (relative to the root of the project). Ex: ./src'
    //     ),
    // });

    const onCancel = () => {
        formik.resetForm({
            values: {
                name: clonedProject.name,
                pathFolderToAnalyse: clonedProject.pathFolderToAnalyse,
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

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useSettingsRight = (props: SettingsRightProps) => {
    const {
        onDelete,
        projectFormValues,
        isNewProject,
        handleCreateProject,
        handleUpdateProject,
    } = props;
    // console.log('RENDER RIGHT projectFormValues', projectFormValues);
    const [initialValues, setInitialValues] =
        useState<Project>(projectFormValues);

    useEffect(() => {
        // console.log('RENDER RIGHT formik.values', formik.values);
        formik.resetForm({
            values: {
                name: projectFormValues.name,
                path: projectFormValues.path,
            },
        });
    }, [setInitialValues, projectFormValues]);

    useEffect(() => {}, [isNewProject]);

    const clonedProject: Project = { ...projectFormValues };
    const submitButtonText: string = isNewProject ? 'ADD' : 'UPDATE';
    // console.log('RENDER RIGHT initialValues', initialValues);
    const validationSchema = Yup.object({
        name: Yup.string().required('The name of the project is required'),
        path: Yup.string().required(
            'The path of the folder to analyze is required'
        ),
    });

    const onCancel = () => {
        formik.resetForm({
            values: { name: clonedProject.name, path: clonedProject.path },
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
        formik.setValues({ name: '', path: '' });
        onDelete();
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
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

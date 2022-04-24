import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useSettingsRight = (props: SettingsRightProps) => {
    const { onDelete, projectFormValues, isNewProject } = props;
    const [initialValues, setInitialValues] =
        useState<Project>(projectFormValues);
    const clonedProject = { ...projectFormValues };
    console.log('RENDER RIGHT', initialValues);
    const validationSchema = Yup.object({
        name: Yup.string().required('The name is required'),
        path: Yup.string().required(
            'The path of the folder to analyze is required'
        ),
    });

    useEffect(() => {
        formik.resetForm({
            values: {
                name: projectFormValues.name,
                path: projectFormValues.path,
            },
        });
    }, [setInitialValues, projectFormValues]);

    const onCancel = () => {
        formik.resetForm({
            values: { name: clonedProject.name, path: clonedProject.path },
        });
        // setIsNewProject(!!clonedProject);
    };

    const onSubmit = () => {
        // currentProject.name = formik.values.name;
        // currentProject.path = formik.values.path;
        // let updatedProjects: Project[] = [...projects];
        // if (isNewProject && !projectAlreadyExists(currentProject.name)) {
        //     updatedProjects.push(currentProject);
        // } else {
        //     updateProjectInProjects(clonedProject, updatedProjects);
        // }
        // handleUpdateProjects(currentProject, updatedProjects);
        // setIsNewProject(false);
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
    };
};

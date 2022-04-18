import { Project } from '../../../../shared/classes/project';
import * as Yup from 'yup';
import { FormikState, FormikValues, useFormik } from 'formik';
import { useState } from 'react';

export const useSettingsRight = () => {
    const project: Project = window.electron.store.get('project');
    const [initialValues] = useState({ name: project?.name, path: project?.path });
    // const initialValues = { name: '', path: '' }
    // const initialValues = new Project(project?.name, project?.path);
    // const [initialValues, setInitialValues] = useState<Project>(new Project(project?.name, project?.path));
    const [isNewProject, setIsNewProject] = useState<boolean>(!!project);
    const validationSchema = Yup.object({
        name: Yup.string().required('The name is required'),
        path: Yup.string().required('The path of the folder to analyze is required'),
    });

    const cancel = () => {
        console.log('CLEAR values')
        formik.resetForm()
    }

    const onSubmit = (values: FormikValues) => {
        console.log('submit values', values)
    }

    const handleClickOnNewProject = () => {
        // setIsNewProject(true);
        formik.resetForm({ values: { name: 'zzz', path: 'fdsfds'}})
        console.log('formik.values', formik.values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnMount: true,
    })

    return {
        formik,
        handleNewProject: handleClickOnNewProject,
        initialValues,
        isNewProject,
        onClear: cancel,
    }
}

import { Project } from '../../../../shared/classes/project';
import * as Yup from 'yup';
import { FormikValues, useFormik } from 'formik';
import { useState } from 'react';
import { store } from '../../../../renderer/App';
import { projectAlreadyExists } from '../../../../shared/utils/projects.util';

export const useSettingsRight = () => {
    const project: Project = window.electron.store.get('project');
    const clonedProject = { ...project };
    const [initialValues] = useState({ name: project?.name, path: project?.path });
    const [isNewProject, setIsNewProject] = useState<boolean>(!!project);
    const validationSchema = Yup.object({
        name: Yup.string().required('The name is required'),
        path: Yup.string().required('The path of the folder to analyze is required'),
    });

    const onCancel = () => {
        formik.resetForm({values: { name: clonedProject.name, path: clonedProject.path }});
        setIsNewProject(!!clonedProject)
    }

    const onSubmit = (values: FormikValues) => {
        project.name = formik.values.name;
        project.path = formik.values.path;
        store.set('project', project);
        if (isNewProject && !projectAlreadyExists(project.name)) {
            const projects: Project[] = store.get('projects');
            store.set('projects', [...projects, project])
        }
        setIsNewProject(false);
    }

    const handleClickOnNewProject = () => {
        setIsNewProject(true);
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
        handleClickOnNewProject,
        initialValues,
        isNewProject,
        onCancel,
    }
}

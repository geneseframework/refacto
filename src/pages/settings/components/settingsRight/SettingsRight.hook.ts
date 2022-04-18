import { Project } from '../../../../shared/classes/project';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { store } from '../../../../renderer/App';
import { projectAlreadyExists, updateProjectInProjects } from '../../../../shared/utils/projects.util';
import { SettingsRightProps } from './SettingsRight';

export const useSettingsRight = (props: SettingsRightProps) => {
    const { handleUpdateProjects, projects } = props;
    const project: Project = store.get('project');
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

    const onSubmit = () => {
        project.name = formik.values.name;
        project.path = formik.values.path;
        store.set('project', project);
        let updatedProjects: Project[] = [...projects];
        if (isNewProject && !projectAlreadyExists(project.name)) {
            updatedProjects.push(project);
        } else {
            updateProjectInProjects(project, updatedProjects);
        }
        handleUpdateProjects(updatedProjects);
        setIsNewProject(false);
    }

    const handleClickOnNewProject = () => {
        setIsNewProject(true);
        formik.setValues( { name: '', path: ''});
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

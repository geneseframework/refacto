import { Project } from '../../../../shared/classes/project';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { store } from '../../../../renderer/App';
import { projectAlreadyExists, updateProjectInProjects } from '../../../../shared/utils/projects.util';
import { SettingsRightProps } from './SettingsRight';

export const useSettingsRight = (props: SettingsRightProps) => {
    const { handleUpdateProjects, currentProject, projects } = props;
    const clonedProject = { ...currentProject };
    const [initialValues] = useState({ name: currentProject?.name, path: currentProject?.path });
    const [isNewProject, setIsNewProject] = useState<boolean>(!!currentProject);
    const validationSchema = Yup.object({
        name: Yup.string().required('The name is required'),
        path: Yup.string().required('The path of the folder to analyze is required'),
    });

    const onCancel = () => {
        formik.resetForm({values: { name: clonedProject.name, path: clonedProject.path }});
        setIsNewProject(!!clonedProject)
    }

    const onSubmit = () => {
        currentProject.name = formik.values.name;
        currentProject.path = formik.values.path;
        let updatedProjects: Project[] = [...projects];
        if (isNewProject && !projectAlreadyExists(currentProject.name)) {
            updatedProjects.push(currentProject);
        } else {
            updateProjectInProjects(clonedProject, updatedProjects);
        }
        handleUpdateProjects(currentProject, updatedProjects);
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

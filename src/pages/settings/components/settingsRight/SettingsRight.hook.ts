import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useSettingsRight = (props: SettingsRightProps) => {
    const { handleUpdateProjects, projects, projectFormValues, isNewProject } =
        props;
    const [initialValues, setInitialValues] =
        useState<Project>(projectFormValues);
    // const [formValues, setFormValues] = useState<Project>(new Project());
    const clonedProject = { ...projectFormValues };
    console.log('RENDER RIGHT', isNewProject);
    // const [projectFormValues] = useState({
    //     name: projectFormValues?.name,
    //     path: projectFormValues?.path,
    // });

    // const [isNewProject, setIsNewProject] = useState<boolean>(
    //     !!projectFormValues
    // );
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

    const handleClickOnDelete = () => {};

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

    const handleClickOnNewProject = () => {
        // setIsNewProject(true);
        formik.setValues({ name: '', path: '' });
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
        handleClickOnNewProject,
        initialValues,
        onCancel,
    };
};

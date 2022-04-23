import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useSettingsRight = (props: SettingsRightProps) => {
    const { handleUpdateProjects, projects, selectedProject } = props;
    const [initialValues, setInitialValues] = useState<Project>(
        selectedProject ?? { name: '', path: '' }
    );
    // const [formValues, setFormValues] = useState<Project>(new Project());
    const clonedProject = { ...selectedProject };
    // const [initialValues] = useState({
    //     name: selectedProject?.name,
    //     path: selectedProject?.path,
    // });

    const [isNewProject, setIsNewProject] = useState<boolean>(
        !!selectedProject
    );
    const validationSchema = Yup.object({
        name: Yup.string().required('The name is required'),
        path: Yup.string().required(
            'The path of the folder to analyze is required'
        ),
    });

    // useEffect(() => {
    //     const project: Project = selectedProject ?? new Project();
    //     setInitialValues(project);
    // }, [setInitialValues, selectedProject]);

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
        formik,
        handleClickOnNewProject,
        initialValues,
        isNewProject,
        onCancel,
    };
};

import { Project } from '../../../../shared/classes/project';
import * as Yup from 'yup';
import { FormikValues, useFormik } from 'formik';

export const useSettingsRight = () => {
    const project: Project = window.electron.store.get('project');

    const validationSchema = Yup.object({
        name: Yup.string().required('The name is required'),
        path: Yup.string().required('The path of the folder to analyze is required'),
    });

    const initialValues = {
        name: project?.name,
        path: project?.path,
    }

    const onSubmit = (values: FormikValues) => {
        console.log('submit values', values)
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
        validateOnMount: true,
    })

    return {
        formik,
    }
}

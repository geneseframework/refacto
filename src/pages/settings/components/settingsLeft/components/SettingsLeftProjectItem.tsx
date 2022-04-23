import React from 'react';
import { useSettingsLeftProjectItem } from './SettingsLeftProjectItem.hook';
import { MenuItem } from '@mui/material';
import { Project } from '../../../../../shared/interfaces/project.interface';

export interface SettingsLeftProjectItemProps {
    changeProjectFormValues: (project: Project) => void;
    index: number;
    project: Project;
}

export const SettingsLeftProjectItem: React.FC<SettingsLeftProjectItemProps> = (
    props
) => {
    const h = useSettingsLeftProjectItem(props);
    return (
        <MenuItem
            value={10}
            onClick={h.changeCurrentProjectAndUpdateSettingsFormProject}
        >
            {h.project?.name}
        </MenuItem>
    );
};

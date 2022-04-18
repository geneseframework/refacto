import React from 'react';
import { Project } from '../../../../../shared/classes/project';
import { useSettingsLeftProjectItem } from './SettingsLeftProjectItem.hook';
import { MenuItem } from '@mui/material';

export interface SettingsLeftProjectItemProps {
    index: number;
    project: Project;
}

export const SettingsLeftProjectItem: React.FC<SettingsLeftProjectItemProps> = (props) => {
    const h = useSettingsLeftProjectItem(props);
    return (
        <MenuItem value={10}>{h.project?.name}</MenuItem>
    )
}

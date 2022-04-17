import React from 'react';
import { Project } from '../../../shared/classes/project';
import { useSettingsProjectItem } from './SettingsProjectItem.hook';
import { MenuItem } from '@mui/material';

export interface SettingsProjectItemProps {
    index: number;
    project: Project;
}

export const SettingsProjectItem: React.FC<SettingsProjectItemProps> = (props) => {
    const h = useSettingsProjectItem(props);
    return (
        <MenuItem key={`projectItem-${h.index}`} value={10}>{h.project?.name}</MenuItem>
    )
}

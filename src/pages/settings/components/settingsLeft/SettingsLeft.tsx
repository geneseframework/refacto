import React from 'react';
import './SettingsLeft.scss';
import { FormControl, Select } from '@mui/material';
import { useSettingsLeft } from './SettingsLeft.hook';
import { SettingsLeftProjectItem } from './components/SettingsLeftProjectItem';
import { Add } from '@mui/icons-material';
import { Project } from '../../../../shared/interfaces/project.interface';

export interface SettingsLeftProps {
    handleClickOnNewProject: () => void;
    projects: Project[];
}

export const SettingsLeft: React.FC<SettingsLeftProps> = (props) => {
    const h = useSettingsLeft(props);
    return (
        <div className="leftContainer">
            <FormControl fullWidth size="small">
                <div className="projectTitleContainer">
                    <div className="projectTitle">Projects</div>
                    <div className="projectPlusIcon" onClick={h.addProject}>
                        <Add />
                    </div>
                </div>
                <Select
                    id="demo-simple-select"
                    onChange={() => {}}
                    sx={{ backgroundColor: 'white' }}
                >
                    {h.projects.map((p, index) => (
                        <SettingsLeftProjectItem
                            project={p}
                            index={index}
                            key={`projectItem-${index}`}
                        />
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

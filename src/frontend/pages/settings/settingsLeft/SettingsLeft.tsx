import React from 'react';
import './SettingsLeft.scss';
import { FormControl, Select } from '@mui/material';
import { useSettingsLeft } from './SettingsLeft.hook';
import { SettingsLeftProjectItem } from './settingtsLeftProjectItem/SettingsLeftProjectItem';
import { Add } from '@mui/icons-material';
import { Project } from '../../../../shared/interfaces/Project.interface';

export interface SettingsLeftProps {
    openNewProjectForm: () => void;
    changeProjectFormValues: (project: Project) => void;
    projects: Project[];
}

export const SettingsLeft: React.FC<SettingsLeftProps> = (props) => {
    const h = useSettingsLeft(props);
    return (
        <div className="leftContainer">
            <FormControl fullWidth size="small">
                <div className="projectTitleContainer">
                    <div className="projectTitle">Projects</div>
                    <div className="projectPlusIcon" onClick={h.clickOnPlus}>
                        <Add />
                    </div>
                </div>
                <Select
                    id="demo-simple-select"
                    sx={{ backgroundColor: 'white' }}
                >
                    {h.projects.map((p, index) => (
                        <SettingsLeftProjectItem
                            project={p}
                            index={index}
                            key={`projectItem-${index}`}
                            changeProjectFormValues={h.handleClickOnItem}
                        />
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

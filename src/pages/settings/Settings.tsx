import React from 'react';
import './Settings.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { SettingsLeft } from './settingsLeft/SettingsLeft';
import { SettingsRight } from './settingsRight/SettingsRight';
import { useSettings } from './Settings.hook';

export const Settings: React.FC = () => {
    const h = useSettings();

    return (
        <div className="bodyContainer">
            <NavBar />
            <div className="mainContainer settings">
                <SettingsLeft
                    openNewProjectForm={h.openNewProjectForm}
                    projects={h.projects}
                    changeProjectFormValues={h.changeProjectFormValues}
                />
                <SettingsRight
                    handleCreateProject={h.handleCreateProject}
                    handleUpdateProject={h.handleUpdateProject}
                    isNewProject={h.isNewProject}
                    onDelete={h.handleOnDelete}
                    projectFormValues={h.projectFormValues}
                />
            </div>
        </div>
    );
};

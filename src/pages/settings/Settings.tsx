import React from 'react';
import './Settings.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { SettingsLeft } from './components/settingsLeft/SettingsLeft';
import { SettingsRight } from './components/settingsRight/SettingsRight';
import { useSettings } from './Settings.hook';

export const Settings: React.FC = () => {
    const h = useSettings();
    return (
        <div className="bodyContainer settings">
            <NavBar />
            <div className="mainContainer">
                <SettingsLeft
                    addProject={h.handleCreateProject}
                    projects={h.projects}
                    changeProjectFormValues={h.changeProjectFormValues}
                />
                <SettingsRight
                    projects={h.projects}
                    handleUpdateProjects={h.handleUpdateProjects}
                    isNewProject={h.isNewProject}
                    projectFormValues={h.projectFormValues}
                />
            </div>
        </div>
    );
};

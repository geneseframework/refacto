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
                    openNewProjectForm={h.openNewProjectForm}
                    projects={h.projects}
                    changeProjectFormValues={h.changeProjectFormValues}
                />
                <SettingsRight
                    handleCreateProject={h.handleCreateProject}
                    handleUpdateProjects={h.handleUpdateProjects}
                    isNewProject={h.isNewProject}
                    onDelete={h.handleOnDelete}
                    projectFormValues={h.projectFormValues}
                />
            </div>
        </div>
    );
};

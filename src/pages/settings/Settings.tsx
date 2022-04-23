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
                    projects={h.projects}
                    handleClickOnNewProject={h.handleUpdateProjects}
                />
                <SettingsRight
                    projects={h.projects}
                    handleUpdateProjects={h.handleUpdateProjects}
                    currentProject={h.currentProject}
                />
            </div>
        </div>
    );
};

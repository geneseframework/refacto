import React from 'react';
import { useSettings } from './Settings.hook';
import './Settings.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { SettingsLeft } from './components/settingsLeft/SettingsLeft';
import { SettingsRight } from './components/settingsRight/SettingsRight';

export const Settings: React.FC = () => {
    const h = useSettings();
    return (
        <div className='bodyContainer settings'>
            <NavBar />
            <div className='mainContainer'>
                <SettingsLeft />
                <SettingsRight />
            </div>
        </div>
    );
}

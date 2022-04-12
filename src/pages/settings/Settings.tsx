import React from 'react';
import { useSettings } from './Settings.hook';
import { NavBar } from '../../components/NavBar/NavBar';

export const Settings: React.FC = () => {
    const h = useSettings();
    return (
        <div className='mainCoverageContainer'>
            <NavBar />
        </div>
    );
}

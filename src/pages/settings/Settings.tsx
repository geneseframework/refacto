import React from 'react';
import { useSettings } from './Settings.hook';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import './Settings.scss';

export const Settings: React.FC = () => {
    const h = useSettings();
    return (
        <div className='bodyContainer settings'>
            <NavBar />
            <div className='mainContainer'>
                <div className='leftContainer'>
                    <h2>Projects</h2>
                </div>
                <div className='rightContainer'>
                    <div>Project</div>
                </div>
            </div>
        </div>
    );
}

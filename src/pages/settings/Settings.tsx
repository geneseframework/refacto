import React from 'react';
import { useSettings } from './Settings.hook';
import { NavBar } from '../../components/NavBar/NavBar';
import './Settings.scss';

export const Settings: React.FC = () => {
    const h = useSettings();
    return (
        <div className='mainCoverageContainer'>
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

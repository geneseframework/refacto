import React from 'react';
import { useSettings } from './Settings.hook';
import './Settings.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { FormControl, Select } from '@mui/material';
import { SettingsProjectItem } from './components/SettingsProjectItem';

export const Settings: React.FC = () => {
    const h = useSettings();
    return (
        <div className='bodyContainer settings'>
            <NavBar />
            <div className='mainContainer'>
                <div className='leftContainer'>
                    <FormControl fullWidth>
                        <p>Projects</p>
                        <Select
                            id="demo-simple-select"
                            onChange={() => {}}
                        >
                            {h.projects.map((p, index) => (
                                <SettingsProjectItem project={p} index={index} />
                                )
                            )}

                        </Select>
                    </FormControl>
                </div>
                <div className='rightContainer'>
                    <div>Project</div>
                </div>
            </div>
        </div>
    );
}

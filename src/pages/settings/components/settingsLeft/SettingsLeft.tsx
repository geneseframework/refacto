import React from 'react';
import './SettingsLeft.scss';
import { FormControl, Select } from '@mui/material';
import { useSettingsLeft } from './SettingsLeft.hook';
import { SettingsLeftProjectItem } from './components/SettingsLeftProjectItem';

export const SettingsLeft: React.FC = () => {
    const h = useSettingsLeft();
    return (
        <div className='leftContainer'>
            <FormControl fullWidth size="small">
                <p>Projects</p>
                <Select
                    id="demo-simple-select"
                    onChange={() => {}}
                    sx={{ backgroundColor: 'white'}}
                >
                    {h.projects.map((p, index) => (
                            <SettingsLeftProjectItem project={p} index={index} key={`projectItem-${index}`} />
                        )
                    )}
                </Select>
            </FormControl>
        </div>
    );
}

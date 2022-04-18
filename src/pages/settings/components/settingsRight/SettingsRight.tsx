import React from 'react';
import './SettingsRight.scss';
import { Box, TextField } from '@mui/material';
import { useSettingsRight } from './SettingsRight.hook';

export const SettingsRight: React.FC = () => {
    const h = useSettingsRight();
    return (
        <div className='rightContainer'>
            <div className='title'>Project</div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div className="formRow">
                    <TextField
                        required
                        id="name"
                        label="Project name"
                        size="small"
                    />
                </div>
            </Box>
        </div>
    );
}

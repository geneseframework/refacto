import React from 'react';
import './SettingsRight.scss';
import { Box, Button, TextField } from '@mui/material';
import { useSettingsRight } from './SettingsRight.hook';

export const SettingsRight: React.FC = () => {
    const h = useSettingsRight();
    console.log('h.project', h.name)
    return (
        <div className='rightContainer'>
                <>
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
                                sx={{ flex: 4}}
                                required
                                id="name"
                                label="Name"
                                size="small"
                                defaultValue={h.name}
                            />
                            <div className="flex7"/>
                        </div>
                        <div className="formRow">
                            <TextField
                                sx={{ flex: 10}}
                                required
                                id="name"
                                label="Path"
                                size="small"
                                defaultValue={h.path}
                            />
                        </div>
                        <div className="divSubmit">
                            <Button variant="contained">Submit</Button>
                        </div>
                    </Box>
                </>
        </div>
    );
}

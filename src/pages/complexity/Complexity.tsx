import React from 'react';
import './Complexity.scss';
import { NavBar } from '../../components/NavBar/NavBar';

export const Complexity: React.FC = () => {
    console.log('CPX')
    window.electron.store.displayComplexityWebview();

    return (
        <div className='mainComplexityContainer'>
            <NavBar />
        </div>
    );
}

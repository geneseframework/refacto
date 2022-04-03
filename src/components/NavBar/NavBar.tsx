import React from 'react';
import './NavBar.scss';

export const NavBar: React.FC = () => {
    return (
        <div className='mainNavBarContainer'>
            <div className='tab'>Home</div>
            <div className='tab'>Code coverage</div>
            <div className='tab'>Code duplication</div>
        </div>
    );
}

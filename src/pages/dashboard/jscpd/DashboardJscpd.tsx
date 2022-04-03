import React from 'react';
import { useDashboardJscpd } from './DashboardJscpd.hook';
import './DashboardJscpd.scss'

export const DashboardJscpd: React.FC = () => {
    const h = useDashboardJscpd();

    return (
        <div className='mainDashboardJscpdContainer'>
            <div><h2>Duplicated code</h2></div>
            <div className='totalContainer'>{h.duplicatedLines}</div>
            <div className='arrayContainer'>
                <div className='arrayHeader'>
                    <div className='fileFormat'>Type</div>
                    <div className='stats'>Duplicated lines</div>
                </div>
                <div className='content'>{h.fileFormatRows.map(h.mapDuplicates)}</div>
            </div>
        </div>
    );
};

import React from 'react';
import { DashboardJscpdRowProps } from './DashboardJscpdRow.props';
import { useDashboardJscpdRow } from './DashboardJscpdRow.hook';
import './DashboardJscpdRow.scss';

export const DashboardJscpdRow: React.FC<DashboardJscpdRowProps> = (props) => {
    const h = useDashboardJscpdRow(props);
    return (
        <div className='row' key={`duplicatesRow-${h.index}`}>
            <div className='fileFormat'>{h.fileFormat}</div>
            <div className='stats'>{h.percentageText}</div>
        </div>
    )
}

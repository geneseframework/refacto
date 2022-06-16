import React from 'react';
import { useDashboardJscpdRow } from './DashboardJscpdRow.hook';
import '../../shared/DashboardStyle.scss';
import './DashboardJscpdRow.scss';
import { JscpdReportItem } from '../../../../../shared/interfaces/JscpdReportItem.interface';

export interface DashboardJscpdRowProps {
    item: JscpdReportItem;
}

export const DashboardJscpdRow: React.FC<DashboardJscpdRowProps> = (props) => {
    const h = useDashboardJscpdRow(props);
    return (
        <div className="row">
            <div className="leftColumn">{h.fileFormat}</div>
            <div className="rightColumn">{h.ratioText}</div>
            <div className="rightColumn">{h.percentageText}</div>
        </div>
    );
};

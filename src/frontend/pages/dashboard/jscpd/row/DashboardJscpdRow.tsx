import React from 'react';
import { useDashboardJscpdRow } from './DashboardJscpdRow.hook';
import './DashboardJscpdRow.scss';
import { JscpdReportItem } from '../../../../../shared/interfaces/JscpdReportItem.interface';

export interface DashboardJscpdRowProps {
    item: JscpdReportItem;
}

export const DashboardJscpdRow: React.FC<DashboardJscpdRowProps> = (props) => {
    const h = useDashboardJscpdRow(props);
    return (
        <div className="row">
            <div className="fileFormat">{h.fileFormat}</div>
            <div className="duplicatedLines">{h.ratioText}</div>
            <div className="duplicatedLines">{h.percentageText}</div>
        </div>
    );
};

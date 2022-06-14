import React from 'react';
import { useDashboardJscpdRow } from './DashboardJscpdRow.hook';
import './DashboardJscpdRow.scss';
import { JscpdDashboardReportItem } from '../../../../../shared/interfaces/JscpdDashboardReportItem.interface';

export interface DashboardJscpdRowProps {
    item: JscpdDashboardReportItem;
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

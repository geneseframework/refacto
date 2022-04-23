import React from 'react';
import { useDashboardJscpdRow } from './DashboardJscpdRow.hook';
import './DashboardJscpdRow.scss';
import { DuplicationStatsItem } from '../../../../shared/interfaces/duplication-stats-item.interface';

export interface DashboardJscpdRowProps {
    row: DuplicationStatsItem;
}

export const DashboardJscpdRow: React.FC<DashboardJscpdRowProps> = (props) => {
    const h = useDashboardJscpdRow(props);
    return (
        <div className="row">
            <div className="fileFormat">{h.fileFormat}</div>
            <div className="stats">{h.percentageText}</div>
        </div>
    );
};

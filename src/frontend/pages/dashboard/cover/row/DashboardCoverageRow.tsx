import React from 'react';
import { useDashboardCoverageRow } from './DashboardCoverageRow.hook';
import '../../shared/DashboardStyle.scss';

export interface DashboardCoverageRowProps {
    covered: number;
    name: string;
    toCover: number;
}

export const DashboardCoverageRow: React.FC<DashboardCoverageRowProps> = (
    props
) => {
    const h = useDashboardCoverageRow(props);
    return (
        <div className="row">
            <div className="leftColumn">{h.name}</div>
            <div className="rightColumn">{h.ratioText}</div>
            <div className="rightColumn">{h.percentageText}</div>
        </div>
    );
};

import React from 'react';
import { useDashboardGenese } from './DashboardGenese.hook';
import '../shared/DashboardStyle.scss';
import './DashboardGenese.scss';
import { Refresh } from '@mui/icons-material';
import { GeneseReport } from '../../../../shared/interfaces/GeneseReport.interface';

export interface DashboardGeneseProps {
    geneseReport: GeneseReport | undefined;
}

export const DashboardGenese: React.FC<DashboardGeneseProps> = (props) => {
    const h = useDashboardGenese(props);

    return (
        <div className="geneseContainer">
            <div className="title">
                <div className="titleName">Cognitive complexity</div>
                <div className="icon" onClick={h.refresh}>
                    <Refresh />
                </div>
            </div>
            {!h.isLoading && (
                <div className="content">
                    <div className="chart">Chart</div>
                    <div className="scores">
                        <div className="row">
                            <div className="leftColumn">Low</div>
                            <div className="rightColumn">{h.lowRatio}</div>
                            <div className="rightColumn">{h.lowPercentage}</div>
                        </div>
                        <div className="row">
                            <div className="leftColumn">Medium</div>
                            <div className="rightColumn">{h.lowRatio}</div>
                            <div className="rightColumn">{h.lowPercentage}</div>
                        </div>
                        <div className="row">
                            <div className="leftColumn">High</div>
                            <div className="rightColumn">{h.lowRatio}</div>
                            <div className="rightColumn">{h.lowPercentage}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

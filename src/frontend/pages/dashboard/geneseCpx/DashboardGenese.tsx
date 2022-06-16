import React from 'react';
import { useDashboardGenese } from './DashboardGenese.hook';
import '../shared/DashboardStyle.scss';
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
                <>
                    <div className="chart">zzz</div>
                    <div className="scores">
                        <div className="low">
                            <div className="level">Low</div>
                            <div className="level">{h.lowRatio}</div>
                            <div className="level">{h.lowPercentage}</div>
                        </div>
                        <div className="medium">
                            <div className="level">Medium</div>
                        </div>
                        <div className="high">
                            <div className="level">High</div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

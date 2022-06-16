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
                    <div className="header">
                        <div className="low">
                            <div className="level">Low</div>
                        </div>
                        <div className="medium">
                            <div className="level">Medium</div>
                            <div className="high">
                                <div className="level">High</div>
                            </div>
                            <div className="arrayContainer">
                                <div className="content"></div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

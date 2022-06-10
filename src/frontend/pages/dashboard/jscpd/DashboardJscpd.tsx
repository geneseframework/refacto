import React from 'react';
import { useDashboardJscpd } from './DashboardJscpd.hook';
import './DashboardJscpd.scss';
import { DuplicationStats } from '../../../../shared/interfaces/duplication-stats.interface';
import { Refresh } from '@mui/icons-material';

export interface DashboardJscpdProps {
    duplicationStats: DuplicationStats | undefined;
}

export const DashboardJscpd: React.FC<DashboardJscpdProps> = (props) => {
    const h = useDashboardJscpd(props);

    return (
        <div className="mainDashboardJscpdContainer">
            <div className="title">
                <div className="titleName">Duplicated code</div>
                <div className="icon">
                    <Refresh />
                </div>
            </div>
            <div className="totalContainer">{h.duplicatedLines}</div>
            <div className="arrayContainer">
                <div className="arrayHeader">
                    <div className="fileFormat">Type</div>
                    <div className="stats">Duplicated lines</div>
                </div>
                <div className="content">{h.rows.map(h.mapDuplicates)}</div>
            </div>
        </div>
    );
};

import React from 'react';
import { useDashboardJscpd } from './DashboardJscpd.hook';
import './DashboardJscpd.scss';
import { DuplicationStats } from '../../../../shared/interfaces/duplication-stats.interface';
import { Refresh } from '@mui/icons-material';
import { JscpdReportItem } from '../../../jscpd/interfaces/JscpdReportItem.interface';
import { DashboardJscpdRow } from './row/DashboardJscpdRow';

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
            <div className="arrayContainer">
                <div className="arrayHeader">
                    <div className="fileFormat">Type</div>
                    <div className="duplicatedLines">Duplicated lines</div>
                </div>
                <div className="content">
                    {h.items.map((item: JscpdReportItem, index: number) => (
                        <DashboardJscpdRow item={item} key={index} />
                    ))}
                </div>
                <div className="arrayHeader">
                    <div className="fileFormat">TOTAL</div>
                    <div className="duplicatedLines">{h.total}</div>
                    <div className="duplicatedLines">{h.totalPercentage}</div>
                </div>
            </div>
        </div>
    );
};

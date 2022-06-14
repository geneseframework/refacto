import React from 'react';
import { useDashboardJscpd } from './DashboardJscpd.hook';
import './DashboardJscpd.scss';
import { Refresh } from '@mui/icons-material';
import { DashboardJscpdRow } from './row/DashboardJscpdRow';
import { JscpdReportItem } from '../../../../shared/interfaces/JscpdReportItem.interface';
import { JscpdReport } from '../../../../shared/interfaces/JscpdReport.interface';

export interface DashboardJscpdProps {
    jscpdReport: JscpdReport | undefined;
}

export const DashboardJscpd: React.FC<DashboardJscpdProps> = (props) => {
    const h = useDashboardJscpd(props);

    return (
        <div className="mainDashboardJscpdContainer">
            <div className="title">
                <div className="titleName">Duplicated code</div>
                <div className="icon" onClick={h.refresh}>
                    <Refresh />
                </div>
            </div>
            {!h.isLoading && (
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
                        <div className="duplicatedLines">
                            {h.totalPercentage}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

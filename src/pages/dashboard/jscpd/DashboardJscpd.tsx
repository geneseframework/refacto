import React from 'react';
import { useDashboardJscpd } from './DashboardJscpd.hook';

export const DashboardJscpd: React.FC = () => {
    const h = useDashboardJscpd();

    return (
        <div>
            <div><h2>Duplicated code</h2></div>
            <div>{h.duplicatedLines}</div>
            <div>
                <div>
                    <div>Type</div>
                    <div>Duplicated lines</div>
                    <div>{h.fileFormatRows.map(h.mapDuplicates)}</div>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { useDashboardCoverage } from './DashboardCoverage.hook';
import '../shared/DashboardStyle.scss';
import { Refresh } from '@mui/icons-material';
import {
    DashboardCoverageRow,
    DashboardCoverageRowProps,
} from './row/DashboardCoverageRow';
import { CoverageReport } from '../../../../shared/interfaces/CoverageReport.interface';

export interface DashboardCoverageProps {
    coverageReport: CoverageReport | undefined;
}

export const DashboardCoverage: React.FC<DashboardCoverageProps> = (props) => {
    const h = useDashboardCoverage(props);

    return (
        <div className="rightToolContainer">
            <div className="title">
                <div className="titleName">Code coverage</div>
                <div className="icon" onClick={h.refresh}>
                    <Refresh />
                </div>
            </div>
            {!h.isLoading && (
                <div className="arrayContainer">
                    <div className="content">
                        {h.rows.map(
                            (
                                item: DashboardCoverageRowProps,
                                index: number
                            ) => (
                                <DashboardCoverageRow
                                    covered={item.covered}
                                    name={item.name}
                                    toCover={item.toCover}
                                    key={`coverageRow-${index}`}
                                />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

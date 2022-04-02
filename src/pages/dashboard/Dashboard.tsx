import React from 'react';
import { DashboardProps } from './Dashboard.props';
import { percentage } from '../../utils/numbers.utils';

export const Dashboard: React.FC<DashboardProps> = (props) => {
    const { jscpdReport } = props;
    console.log('DASHBOARD JSCPD', jscpdReport)
    const totalLines: number = jscpdReport.statistics.total.lines;
    const totalDuplicatedLines: number = jscpdReport.statistics.total.duplicatedLines;
    const duplicatedLinesPercentage: number = percentage(totalDuplicatedLines, totalLines);
    const duplicatedLines: string = `Lines : ${totalDuplicatedLines} / ${totalLines} (${duplicatedLinesPercentage} %)`;

    return (
        <div>
            <div>Duplicated code</div>
            <div>{duplicatedLines}</div>
        </div>
    );
};

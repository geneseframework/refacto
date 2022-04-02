import React from 'react';
import { percentage } from '../../utils/numbers.utils';
import { JscpdReport } from '../../features/jscpd/interfaces/JscpdReport.interface';
import { JscpdStatsFileFormat } from '../../features/jscpd/interfaces/JscpdStatsFileFormat.interface';

export const Dashboard: React.FC = () => {
    const jscpdReport: JscpdReport = window.electron.store.jscpd();
    console.log('DASHBOARD JSCPD', jscpdReport)
    const totalLines: number = jscpdReport.statistics.total.lines;
    const totalDuplicatedLines: number = jscpdReport.statistics.total.duplicatedLines;
    const duplicatedLinesPercentage: number = percentage(totalDuplicatedLines, totalLines);
    const duplicatedLines: string = `Lines : ${totalDuplicatedLines} / ${totalLines} (${duplicatedLinesPercentage} %)`;
    const fileFormatRows: [fileFormat: string, stats: JscpdStatsFileFormat][] = Object.entries(jscpdReport.statistics.formats);
    const mapDuplicates = (row: [fileFormat: string, stats: JscpdStatsFileFormat], index: number) => {
        return (
            <div>zzz</div>
        );
    }
    return (
        <div>
            <div>Duplicated code</div>
            <div>{duplicatedLines}</div>
            <div>
                <div>
                    <div>Type</div>
                    <div>Duplicated lines</div>
                    <div>{fileFormatRows.map(mapDuplicates)}</div>
                </div>
            </div>
        </div>
    );
};

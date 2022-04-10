import { percentage } from '../../../shared/utils/numbers.utils';
import { JscpdReport } from '../../../features/jscpd/interfaces/JscpdReport.interface';
import { JscpdStatsFileFormat } from '../../../features/jscpd/interfaces/JscpdStatsFileFormat.interface';
import { DashboardJscpdRow } from './components/DashboardJscpdRow';
import { FileFormat } from '../../../features/jscpd/types/FileFormat.type';
import { useState } from 'react';
import { StatsDuplication } from '../../../shared/classes/stats-duplication';
import { Project } from '../../../shared/classes/project';

export const useDashboardJscpd = () => {
    const [report, setReport] = useState<StatsDuplication | undefined>(undefined);
    console.log('START')
    const project: Project = window.electron.store.get('project');
    if (project?.stats?.duplication?.total?.total > 0) {
        console.log('HAS DUPL STATS')
    } else {
        console.log('HAS NOT DUPL STATS')
    }
    console.log('project', window.electron.store.get('project'))
    window.electron.store.run('jscpd');
    const jscpdReport: JscpdReport = window.electron.store.jscpd();
    const totalLines: number = jscpdReport.statistics.total.lines;
    const totalDuplicatedLines: number = jscpdReport.statistics.total.duplicatedLines;
    const duplicatedLinesPercentage: number = percentage(totalDuplicatedLines, totalLines);
    const duplicatedLines: string = `Duplicated lines : ${totalDuplicatedLines} / ${totalLines} (${duplicatedLinesPercentage} %)`;
    const fileFormatRows: [fileFormat: string, stats: JscpdStatsFileFormat][] = Object.entries(jscpdReport.statistics.formats);
    const mapDuplicates = (row: [fileFormat: string, statsFileFormat: JscpdStatsFileFormat], index: number) => {
        const [fileFormat, statsFileFormat] = row;
        return (
            <DashboardJscpdRow statsFileFormat={statsFileFormat} fileFormat={fileFormat as FileFormat} index={index} key={`duplicatesRow-${index}`}/>
        );
    }
    return {
        duplicatedLines,
        duplicatedLinesPercentage,
        fileFormatRows,
        mapDuplicates
    };
};

import { isPositive, percentage } from '../../../shared/utils/numbers.utils';
import { JscpdReport } from '../../../features/jscpd/interfaces/JscpdReport.interface';
import { JscpdStatsFileFormat } from '../../../features/jscpd/interfaces/JscpdStatsFileFormat.interface';
import { DashboardJscpdRow } from './components/DashboardJscpdRow';
import { FileFormat } from '../../../features/jscpd/types/FileFormat.type';
import { useCallback, useEffect, useState } from 'react';
import { DuplicationStats } from '../../../shared/classes/duplication-stats';
import { Project } from '../../../shared/classes/project';
import { DashboardJscpdProps } from './DashboardJscpd';
import { DuplicationStatsItem } from '../../../shared/classes/duplication-stats-item';

export const useDashboardJscpd = (props: DashboardJscpdProps) => {
    const { duplicationStats } = props;
    // const [report, setReport] = useState<DuplicationStats | undefined>(undefined);
    const [duplicatedLines, setDuplicatedLines] = useState<string>('')
    const [rows, setRows] = useState<DuplicationStatsItem[]>([])
    const [duplicatedLinesPercentage, setDuplicatedLinesPercentage] = useState<string>('')
    console.log('START', duplicationStats)
    const project: Project = window.electron.store.get('project');
    if (isPositive(project?.stats?.duplication?.header?.total)) {
        console.log('HAS DUPL STATS')
    } else {
        console.log('HAS NOT DUPL STATS')
    }
    useEffect(() => {
        console.log('report ?', window.electron.store.get('report'))
        if (!duplicationStats) {
            window.electron.store.run('jscpd');
            const jscpdReport: JscpdReport = window.electron.store.jscpd();
            console.log('jscpdReport', jscpdReport)
            const stats = new DuplicationStats();
            stats.init(jscpdReport);
            console.log('stats', stats)
            const percents: number | undefined = percentage(stats.header.duplicates, stats.header.total);
            setDuplicatedLinesPercentage(percents ? percents.toString() : '');
            setDuplicatedLines(`Duplicated lines : ${stats.header.total} / ${stats.header.duplicates} (${percents} %)`);
            console.log('duplicatedLinesPercentage', duplicatedLinesPercentage)
            setRows(stats.types);

        }
    }, [duplicationStats])
    const mapDuplicates = (row: DuplicationStatsItem, index: number) => {
    // const mapDuplicates = (duplicationStatsItem: DuplicationStatsItem, index: number) => {
        return (
            <DashboardJscpdRow row={row} key={index} />
        );
    }
    return {
        duplicatedLines,
        duplicatedLinesPercentage,
        mapDuplicates,
        rows,
    };
};

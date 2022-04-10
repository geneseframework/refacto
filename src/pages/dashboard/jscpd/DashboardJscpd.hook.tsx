import { percentage } from '../../../shared/utils/numbers.utils';
import { JscpdReport } from '../../../features/jscpd/interfaces/JscpdReport.interface';
import { DashboardJscpdRow } from './components/DashboardJscpdRow';
import { useEffect, useState } from 'react';
import { DuplicationStats } from '../../../shared/classes/duplication-stats';
import { Project } from '../../../shared/classes/project';
import { DashboardJscpdProps } from './DashboardJscpd';
import { DuplicationStatsItem } from '../../../shared/classes/duplication-stats-item';

export const useDashboardJscpd = (props: DashboardJscpdProps) => {
    const { duplicationStats } = props;
    const [duplicatedLines, setDuplicatedLines] = useState<string>('')
    const [rows, setRows] = useState<DuplicationStatsItem[]>([])
    const [duplicatedLinesPercentage, setDuplicatedLinesPercentage] = useState<string>('')

    useEffect(() => {
        let stats = duplicationStats ?? new DuplicationStats();
        if (!duplicationStats) {
            window.electron.store.run('jscpd');
            const jscpdReport: JscpdReport = window.electron.store.jscpd();
            stats.init(jscpdReport);
            const project: Project = window.electron.store.get('project') ?? {};
            project.stats.duplication = new DuplicationStats(stats.header, stats.types);
            console.log('project ?', project)
            window.electron.store.set('project', project)
        }
        const percents: number | undefined = percentage(stats.header.duplicates, stats.header.total);
        setDuplicatedLinesPercentage(percents ? percents.toString() : '');
        setRows(stats.types);
        setDuplicatedLines(`Duplicated lines : ${stats.header.duplicates} / ${stats.header.total} (${percents} %)`);
    }, [duplicationStats])

    const mapDuplicates = (row: DuplicationStatsItem, index: number) => {
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

import { JscpdReport } from '../../../../shared/interfaces/JscpdReport.interface';
import { DashboardJscpdRow } from './components/DashboardJscpdRow';
import { useEffect, useState } from 'react';
import { DashboardJscpdProps } from './DashboardJscpd';
import { DuplicationStatsItem } from '../../../../shared/interfaces/duplication-stats-item.interface';
import { Project } from '../../../../shared/interfaces/project.interface';

export const useDashboardJscpd = (props: DashboardJscpdProps) => {
    const { duplicationStats } = props;
    const [duplicatedLines, setDuplicatedLines] = useState<string>('');
    const [rows, setRows] = useState<DuplicationStatsItem[]>([]);
    const [duplicatedLinesPercentage, setDuplicatedLinesPercentage] =
        useState<string>('');

    useEffect(() => {
        let stats = duplicationStats ?? {};
        if (!duplicationStats) {
            window.electron.store.runJscpd();
            const jscpdReport: JscpdReport | undefined =
                window.electron.store.getJscpdReport();
            console.log('jscpdReport', jscpdReport);
            if (jscpdReport) {
                // stats.init(jscpdReport);
                const project: Project =
                    window.electron.store.get('project') ?? {};
                // project.stats.duplication = new DuplicationStats(
                //     stats.header,
                //     stats.types
                // );
                console.log('project ?', project);
                window.electron.store.set('project', project);
            } else {
                console.log('No duplication report');
            }
        }
        // const percents: number | undefined = percentage(
        //     stats.header.duplicates,
        //     stats.header.total
        // );
        // setDuplicatedLinesPercentage(percents ? percents.toString() : '');
        // setRows(stats.types);
        // let duplicatedLinesText = `Duplicated lines : ${stats.header.duplicates} / ${stats.header.total}`;
        // if (percents) {
        //     duplicatedLinesText = `${duplicatedLinesText} (${percents} %)`;
        // }
        // setDuplicatedLines(duplicatedLinesText);
    }, [duplicationStats]);

    const mapDuplicates = (row: DuplicationStatsItem, index: number) => {
        return <DashboardJscpdRow row={row} key={index} />;
    };

    return {
        duplicatedLines,
        duplicatedLinesPercentage,
        mapDuplicates,
        rows,
    };
};

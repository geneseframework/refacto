import { JscpdReport } from '../../../../shared/interfaces/JscpdReport.interface';
import { DashboardJscpdRow } from './row/DashboardJscpdRow';
import { useEffect, useState } from 'react';
import { DashboardJscpdProps } from './DashboardJscpd';
import { Project } from '../../../../shared/interfaces/project.interface';
import { JscpdReportItem } from '../../../jscpd/interfaces/JscpdReportItem.interface';

export const useDashboardJscpd = (props: DashboardJscpdProps) => {
    const { duplicationStats } = props;
    const [duplicatedLines, setDuplicatedLines] = useState<string>('');
    const [items, setItems] = useState<JscpdReportItem[]>([]);
    const [duplicatedLinesPercentage, setDuplicatedLinesPercentage] =
        useState<string>('');

    useEffect(() => {
        let stats = duplicationStats ?? {};
        if (!duplicationStats) {
            window.electron.store.runJscpd();
            const jscpdReport: JscpdReport | undefined =
                window.electron.store.getJscpdReport();
            console.log('Dashboard jscpdReport', jscpdReport);
            if (jscpdReport) {
                // stats.init(jscpdReport);
                setItems(jscpdReport.items);
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
        // setItems(stats.types);
        // let duplicatedLinesText = `Duplicated lines : ${stats.header.duplicates} / ${stats.header.total}`;
        // if (percents) {
        //     duplicatedLinesText = `${duplicatedLinesText} (${percents} %)`;
        // }
        // setDuplicatedLines(duplicatedLinesText);
    }, [duplicationStats]);

    const mapDuplicates = (item: JscpdReportItem, index: number) => {
        return <DashboardJscpdRow item={item} key={index} />;
    };

    return {
        duplicatedLines,
        duplicatedLinesPercentage,
        items,
        mapDuplicates,
    };
};

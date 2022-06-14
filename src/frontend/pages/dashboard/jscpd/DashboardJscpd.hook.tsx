import { JscpdReport } from '../../../../shared/interfaces/JscpdReport.interface';
import { useEffect, useState } from 'react';
import { DashboardJscpdProps } from './DashboardJscpd';
import { add } from '../../../../shared/utils/arrays.utils';
import { percentage } from '../../../../shared/utils/numbers.utils';
import { JscpdReportItem } from '../../../../shared/interfaces/JscpdReportItem.interface';
import { Project } from '../../../../shared/interfaces/Project.interface';

export const useDashboardJscpd = (props: DashboardJscpdProps) => {
    const { jscpdReport } = props;
    const [items, setItems] = useState<JscpdReportItem[]>([]);
    const [total, setTotal] = useState<string>('');
    const [totalPercentage, setTotalPercentage] = useState<string>('');

    useEffect(() => {
        console.log('props jscpdReport', jscpdReport);
        if (!jscpdReport) {
            window.electron.store.runJscpd();
            const newJscpdReport: JscpdReport | undefined =
                window.electron.store.getJscpdReport();
            if (newJscpdReport) {
                setItems(newJscpdReport.items);
                const { total, totalPercentage } = getTexts(newJscpdReport);
                setTotal(total);
                setTotalPercentage(totalPercentage);
                const project: Project =
                    window.electron.store.get('project') ?? {};
                console.log('project ?', project);
                project.stats = project.stats || {};
                project.stats.duplication = newJscpdReport;
                window.electron.store.set('project', project);
            } else {
                console.log('No duplication report');
            }
        } else {
            setItems(jscpdReport.items);
            const { total, totalPercentage } = getTexts(jscpdReport);
            setTotal(total);
            setTotalPercentage(totalPercentage);
        }
    }, [jscpdReport]);

    const getTexts = (report: JscpdReport) => {
        const totalDuplicatedLines = add(
            report.items.map((i) => i.duplicatedLines)
        );
        const totalLines = add(report.items.map((i) => i.lines));
        const duplicatedLinesPercentage = percentage(
            totalDuplicatedLines,
            totalLines
        );
        const total = `${totalDuplicatedLines} / ${totalLines}`;
        const totalPercentage = `(${duplicatedLinesPercentage} %)`;
        return {
            total,
            totalPercentage,
        };
    };

    return {
        items,
        total,
        totalPercentage,
    };
};

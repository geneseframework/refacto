import { JscpdDashboardReport } from '../../../../shared/interfaces/JscpdDashboardReport.interface';
import { useEffect, useState } from 'react';
import { DashboardJscpdProps } from './DashboardJscpd';
import { add } from '../../../../shared/utils/arrays.utils';
import { percentage } from '../../../../shared/utils/numbers.utils';
import { JscpdDashboardReportItem } from '../../../../shared/interfaces/JscpdDashboardReportItem.interface';

export const useDashboardJscpd = (props: DashboardJscpdProps) => {
    const { duplicationStats } = props;
    const [items, setItems] = useState<JscpdDashboardReportItem[]>([]);
    const [total, setTotal] = useState<string>('');
    const [totalPercentage, setTotalPercentage] = useState<string>('');

    useEffect(() => {
        if (!duplicationStats) {
            window.electron.store.runJscpd();
            const jscpdReport: JscpdDashboardReport | undefined =
                window.electron.store.getJscpdReport();
            if (jscpdReport) {
                setItems(jscpdReport.items);
                const totalDuplicatedLines = add(
                    jscpdReport.items.map((i) => i.duplicatedLines)
                );
                const totalLines = add(jscpdReport.items.map((i) => i.lines));
                const duplicatedLinesPercentage = percentage(
                    totalDuplicatedLines,
                    totalLines
                );
                setTotal(`${totalDuplicatedLines} / ${totalLines}`);
                setTotalPercentage(`(${duplicatedLinesPercentage} %)`);
                // const project: Project =
                //     window.electron.store.get('project') ?? {};
                // console.log('project ?', project);
                // window.electron.store.set('project', project);
            } else {
                console.log('No duplication report');
            }
        }
    }, [duplicationStats]);

    return {
        items,
        total,
        totalPercentage,
    };
};

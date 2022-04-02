import { percentage } from '../../../utils/numbers.utils';
import { JscpdReport } from '../../../features/jscpd/interfaces/JscpdReport.interface';
import { JscpdStatsFileFormat } from '../../../features/jscpd/interfaces/JscpdStatsFileFormat.interface';
import { DashboardJscpdRow } from './components/DashboardJscpdRow';
import { FileFormat } from '../../../features/jscpd/types/FileFormat.type';

export const useDashboardJscpd = () => {
    window.electron.store.run('jscpd');
    console.log('END OF EXEC JSCPD')
    const jscpdReport: JscpdReport = window.electron.store.jscpd();
    console.log('DASHBOARD JSCPD', jscpdReport)
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

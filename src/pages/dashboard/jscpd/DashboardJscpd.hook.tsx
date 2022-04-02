import { percentage } from '../../../utils/numbers.utils';
import { JscpdReport } from '../../../features/jscpd/interfaces/JscpdReport.interface';
import { JscpdStatsFileFormat } from '../../../features/jscpd/interfaces/JscpdStatsFileFormat.interface';
import { DuplicatesRow } from './components/DuplicatesRow';
import { FileFormat } from '../../../features/jscpd/types/FileFormat.type';

export const useDashboardJscpd = () => {
    const jscpdReport: JscpdReport = window.electron.store.jscpd();
    console.log('DASHBOARD JSCPD', jscpdReport)
    const totalLines: number = jscpdReport.statistics.total.lines;
    const totalDuplicatedLines: number = jscpdReport.statistics.total.duplicatedLines;
    const duplicatedLinesPercentage: number = percentage(totalDuplicatedLines, totalLines);
    const duplicatedLines: string = `Lines : ${totalDuplicatedLines} / ${totalLines} (${duplicatedLinesPercentage} %)`;
    const fileFormatRows: [fileFormat: string, stats: JscpdStatsFileFormat][] = Object.entries(jscpdReport.statistics.formats);
    const mapDuplicates = (row: [fileFormat: string, statsFileFormat: JscpdStatsFileFormat], index: number) => {
        const [fileFormat, statsFileFormat] = row;
        return (
            <DuplicatesRow statsFileFormat={statsFileFormat} fileFormat={fileFormat as FileFormat} index={index}/>
        );
    }
    return {
        duplicatedLines,
        duplicatedLinesPercentage,
        fileFormatRows,
        mapDuplicates
    };
};

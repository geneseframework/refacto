import { JscpdStatsFileFormat } from '../../../../features/jscpd/interfaces/JscpdStatsFileFormat.interface';
import { FileFormat } from '../../../../features/jscpd/types/FileFormat.type';

export interface DashboardJscpdRowProps {
    fileFormat: FileFormat;
    index: number;
    statsFileFormat: JscpdStatsFileFormat;
}

import { JscpdReport } from './JscpdReport.interface';
import { CoverageReport } from './CoverageReport.interface';

export interface Stats {
    coverage?: CoverageReport;
    duplication?: JscpdReport;
}

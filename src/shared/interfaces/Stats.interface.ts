import { JscpdReport } from './JscpdReport.interface';
import { CoverageReport } from './CoverageReport.interface';
import { GeneseReport } from './GeneseReport.interface';

export interface Stats {
    complexity?: GeneseReport;
    coverage?: CoverageReport;
    duplication?: JscpdReport;
}

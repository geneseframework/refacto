import { CoverageReport } from '../../../shared/interfaces/CoverageReport.interface';
import { COVERAGE_REPORT_MOCK } from '../mocks/JestReport.mock';

export function getCoverageReport(): CoverageReport | undefined {
    return COVERAGE_REPORT_MOCK;
}

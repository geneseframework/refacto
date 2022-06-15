import { useEffect, useState } from 'react';
import { DashboardCoverageProps } from './DashboardCoverage';
import { DashboardCoverageRowProps } from './row/DashboardCoverageRow';
import { CoverageReport } from '../../../../shared/interfaces/CoverageReport.interface';
import { Project } from '../../../../shared/interfaces/Project.interface';

export const useDashboardCoverage = (props: DashboardCoverageProps) => {
    const { coverageReport } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [rows, setRows] = useState<DashboardCoverageRowProps[]>([]);

    useEffect(() => {
        if (!coverageReport) {
            calcNewStats();
        } else {
            setRows(mapCoverageReport(coverageReport));
        }
        setIsLoading(false);
    }, [coverageReport]);

    const calcNewStats = () => {
        window.electron.store.runJest();
        const newCoverageReport: CoverageReport | undefined =
            window.electron.store.getJestReport();
        if (newCoverageReport) {
            setRows(mapCoverageReport(newCoverageReport));
            const project: Project = window.electron.store.get('project') ?? {};
            project.stats = project.stats || {};
            project.stats.coverage = newCoverageReport;
            window.electron.store.set('project', project);
        } else {
            console.log('No coverage report');
        }
    };

    const mapCoverageReport = (
        coverageReport: CoverageReport
    ): DashboardCoverageRowProps[] => {
        return [
            {
                name: 'branches',
                toCover: coverageReport.branches,
                covered: coverageReport.coveredBranches,
            },
            {
                name: 'functions',
                toCover: coverageReport.functions,
                covered: coverageReport.coveredFunctions,
            },
            {
                name: 'lines',
                toCover: coverageReport.lines,
                covered: coverageReport.coveredLines,
            },
            {
                name: 'statements',
                toCover: coverageReport.statements,
                covered: coverageReport.coveredStatements,
            },
        ];
    };

    const refresh = () => {
        setIsLoading(true);
        setRows([rows[2]]);
        calcNewStats();
        setIsLoading(false);
    };

    return {
        isLoading,
        refresh,
        rows,
    };
};

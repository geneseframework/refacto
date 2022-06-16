import { useEffect, useState } from 'react';
import { DashboardGeneseProps } from './DashboardGenese';

export const useDashboardGenese = (props: DashboardGeneseProps) => {
    const { geneseReport } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!geneseReport) {
            calcNewStats();
        } else {
            // setRows(mapCoverageReport(geneseReport));
        }
        setIsLoading(false);
    }, [geneseReport]);

    const calcNewStats = () => {
        // window.electron.store.runJest();
        // const newCoverageReport: CoverageReport | undefined =
        //     window.electron.store.getJestReport();
        // if (newCoverageReport) {
        //     setRows(mapCoverageReport(newCoverageReport));
        //     const project: Project = window.electron.store.get('project') ?? {};
        //     project.stats = project.stats || {};
        //     project.stats.coverage = newCoverageReport;
        //     window.electron.store.set('project', project);
        // } else {
        //     console.log('No coverage report');
        // }
    };
    //
    // const mapCoverageReport = (
    //     coverageReport: CoverageReport
    // ): DashboardCoverageRowProps[] => {
    //     return [
    //         {
    //             name: 'branches',
    //             toCover: coverageReport.branches,
    //             covered: coverageReport.coveredBranches,
    //         },
    //         {
    //             name: 'functions',
    //             toCover: coverageReport.functions,
    //             covered: coverageReport.coveredFunctions,
    //         },
    //         {
    //             name: 'lines',
    //             toCover: coverageReport.lines,
    //             covered: coverageReport.coveredLines,
    //         },
    //         {
    //             name: 'statements',
    //             toCover: coverageReport.statements,
    //             covered: coverageReport.coveredStatements,
    //         },
    //     ];
    // };

    const refresh = () => {
        setIsLoading(true);
        calcNewStats();
        setIsLoading(false);
    };

    return {
        isLoading,
        refresh,
    };
};

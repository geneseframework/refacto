import { percentage } from '../../../../../shared/utils/numbers.utils';
import { DashboardJscpdRowProps } from './DashboardJscpdRow';

export const useDashboardJscpdRow = (props: DashboardJscpdRowProps) => {
    const { row } = props;
    const duplicatedLinesPercentage = percentage(row.duplicates, row.total);
    const percentageText: string = `${row.duplicates} / ${row.total} (${duplicatedLinesPercentage} %)`;
    const fileFormat: string = row.name;

    return {
        ...props,
        fileFormat,
        percentageText,
    };
};

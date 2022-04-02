import React from 'react';
import { DuplicatesRowProps } from './DuplicatesRow.props';
import { useDuplicatesRow } from './DuplicatesRow.hook';

export const DuplicatesRow: React.FC<DuplicatesRowProps> = (props) => {
    const h = useDuplicatesRow(props);
    return (
        <div>
            <div>{h.fileFormat}</div>
            <div>{h.percentageText}</div>
        </div>
    )
}

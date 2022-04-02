import React from 'react';
import { DashboardProps } from './Dashboard.props';

export const Dashboard: React.FC<DashboardProps> = (props) => {
    const {jscpd} = props;
    console.log('DASHBOARD JSCPD', jscpd)
    let z = 'erze';
    for (let i = 0; i < 10; i++) {
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
    }
    for (let i = 0; i < 10; i++) {
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
        z = z + 'ezrez';
        z = z + 'ggfgd';
    }

    return (
        <div>
            <div>Refacto DASHBOARD</div>
            <div>{JSON.stringify(jscpd)}</div>
        </div>
    );
};

import { Tool } from '../interfaces/Tool.interface';

export const JSCPD_TOOL: Tool = {
    command: 'jscpd src -o reports/jscpd -r html',
    label: 'jscpd',
    name: 'JsCpd',
};

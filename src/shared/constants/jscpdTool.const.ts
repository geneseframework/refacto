import { Tool } from '../interfaces/tool.interface';

export const JSCPD_TOOL: Tool = {
    command: 'jscpd src -o reports/jscpd -r html',
    label: 'jscpd',
    name: 'JsCpd',
};

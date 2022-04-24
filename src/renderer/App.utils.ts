import { getTools, saveTools } from '../shared/store/tools.store';
import { Tool } from '../shared/interfaces/tool.interface';

export const init = (): void => {
    initTools();
};

const initTools = (): void => {
    const tools: Tool[] = getTools();
    if (!tools) {
        const defaultTools: Tool[] = [
            {
                command: 'genese cpx ./src',
                name: 'Genese Cpx',
            },
            {
                command: 'jscpd src -o reports/jscpd -r html',
                name: 'JsCpd',
            },
            {
                command: 'jest --coverage',
                name: 'Jest',
            },
        ];
        saveTools(defaultTools);
    }
};

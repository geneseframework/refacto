import { getTools, saveTools } from '../shared/store/tools.store';
import { Tool } from '../shared/interfaces/tool.interface';
import { JSCPD_TOOL } from '../shared/constants/jscpdTool.const';
import { GENESE_TOOL } from '../shared/constants/geneseTool.const';
import { JEST_TOOL } from '../shared/constants/jestTool.const';

export const init = (): void => {
    initTools();
};

const initTools = (): void => {
    const tools: Tool[] = getTools();
    if (!tools) {
        const defaultTools: Tool[] = [GENESE_TOOL, JSCPD_TOOL, JEST_TOOL];
        saveTools(defaultTools);
    }
};

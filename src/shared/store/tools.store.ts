import { store } from '../../renderer/App';
import { API } from '../enums/api.enum';
import { Tool } from '../interfaces/tool.interface';

export const getTools = (): Tool[] => {
    return store.get(API.TOOLS);
};

export const saveTools = (tools: Tool[]): void => {
    store.set(API.TOOLS, tools);
};
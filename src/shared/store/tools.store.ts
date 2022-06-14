import { store } from '../../backend/App/App';
import { API } from '../enums/api.enum';
import { Tool } from '../interfaces/Tool.interface';

export const getTools = (): Tool[] => {
    return store.get(API.TOOLS);
};

export const saveTools = (tools: Tool[]): void => {
    store.set(API.TOOLS, tools);
};

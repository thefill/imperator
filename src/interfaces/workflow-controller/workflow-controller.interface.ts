import {ActionType} from '../../enums/action-type';
import {IProcessorConfig} from '../processor';
import {IWorkflowConfig} from '../workflow';

export interface IWorkflowController {
    setProcessor(id: string, config: IProcessorConfig): void;

    unsetProcessor(id: string): void;

    setWorkflow(config: IWorkflowConfig): void;

    unsetWorkflow(id: string): void;

    evaluateWorkflow(id: string): void;
    
    triggerAction(
        type: ActionType,
        path: string | string[],
        params?: any,
        force?: boolean
    ): void;
}

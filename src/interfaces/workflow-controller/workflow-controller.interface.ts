import {ActionType} from '../../enums/action-type';
import {IWorkflowConfig} from '../workflow-config';
import {Processor} from '../processor';

export interface IWorkflowController {
    setProcessor(id, callback: Processor);

    unsetProcessor(id: string);

    setWorkflow(workflowConfig: IWorkflowConfig);

    unsetWorkflow(workflowId: string);

    evaluateWorkflow(id: string);

    // trigger
    action(
        type: ActionType,
        path: string | string[],
        params?: any,
        force?: boolean
    );
}

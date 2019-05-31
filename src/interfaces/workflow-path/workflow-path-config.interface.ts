import {IWorkflowBase} from '../workflow-base';
import {IWorkflowStepConfig} from '../workflow-step';

/**
 * Config object for the workflow path
 */
export interface IWorkflowPathConfig extends IWorkflowBase {
    // list of steps in the path, evaluated in sequence
    steps: IWorkflowStepConfig[];
}

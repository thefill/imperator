import {IWorkflowBase} from '../workflow-base';

/**
 * Config object for the workflow step
 */
export interface IWorkflowStepConfig extends IWorkflowBase {
    // how we should evaluate the step - if none provided we
    // trigger onSuccess as soon as we hit this tep
    processor?: string;
}

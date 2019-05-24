import {IWorkflowBaseConfig} from '../workflow-base-config';

export interface IWorkflowStepConfig extends IWorkflowBaseConfig {
    // how we should evaluate the step - if none provided we trigger onSuccess as soon as we hit this tep
    processor?: string;
}

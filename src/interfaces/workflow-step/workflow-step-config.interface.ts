import {IWorkflowBase} from '../workflow-base';

/**
 * Config object for the workflow step
 */
export interface IWorkflowStepConfig extends IWorkflowBase {
    // how we should evaluate the step:
    // - if none provided we trigger onSuccess as soon as we hit this tep
    // - if one provided we trigger it and expect status
    // - if one provided and returned awaiting status we wait for next calls
    //   that will be routed to the same processor until it returns other status
    // - if multiple provided we trigger one after another and expect status
    // - if multiple provided we trigger one until we get awaiting status
    //   then we trigger next one when external trigger occurs
    processors?: string | string[];
}

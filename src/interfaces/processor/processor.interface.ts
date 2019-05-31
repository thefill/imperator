import {WorkflowStatus} from '../../enums/workflow-status';
import {IWorkflow} from '../workflow';

/**
 * Processor definition
 */
export interface IProcessor {
    // trigger callback registered under id
    // - processors returns Promise
    // - processors are called with:
    //      - trigger params
    //      - step path (string[])
    //      - workflow object
    id: string;
    // callback called when executing processor
    callback: ProcessorCallback;
    // callback called when undoing processor action
    rollback?: ProcessorCallback;
    // maximum time this step is valid for as number of ms
    // or string matching /^[1-9]+(ms|s|min|h|d|w|m|y|){1}$/
    ttl?: number | string;
    // how many times we should retry until we trigger onFailure
    retryCount?: number;
    // for how long we delay execution of the step
    retryDelay?: number;
    // Expected params for the following call after callback
    // returns WorkflowStatus.AWAITING
    awaitedCallbackParams?: any;
    // Expected params for the following call after rollback
    // returns WorkflowStatus.AWAITING
    awaitedRollbackParams?: any;
}

/**
 * Callback
 * @param {IWorkflow} workflow Reference to workflow that triggered the processor
 * @param {string[]} stepPath Path route to the step that executes processor
 * @param {...any} triggerParams any params passed with the call
 */
export type ProcessorCallback = (
    workflow: IWorkflow,
    stepPath: string[],
    ...stepParams: any
) => Promise<WorkflowStatus>;

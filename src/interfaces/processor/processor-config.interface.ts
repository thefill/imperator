import {WorkflowStatus} from '../../enums/workflow-status';

export interface IProcessorConfig {
    // trigger callback registered under id
    // - processors returns Promise
    // - processors are called with:
    //      - trigger params
    //      - global workflow ParamStore
    //      - step path (string[])
    //      - workflow object
    id?: string;
    // callback called when executing processor
    callback: ProcessorCallback;
    // timestamp when executed
    calledDate?: number;
    // maximum time this step is valid for as number of ms or string matching /^[1-9]+(ms|s|min|h|d|w|m|y|){1}$/
    ttl?: number | string;
    // no of times rule has been evaluated (useful e.g. when retry have limit)
    calledCount?: number;
    // how many times we should retry until we trigger onFailure
    retryCount?: number;
    // for how long we delay execution of the step
    retryDelay?: number;
}

export type ProcessorCallback = (...args: any) => Promise<WorkflowStatus>;

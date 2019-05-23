
export interface IWorkflowController {


    setProcessor(id, callback: Processor)
    unsetProcessor(id: string)

    setWorkflow(workflowConfig: IWorkflow)
    unsetWorkflow(workflowId: string)
    evaluateWorkflow(id: string)

    // trigger
    action(
        type: ActionType,
        path: string | string[],
        params?: any,
        force?: boolean
    )
}

export type Processor = (...args: any) => Promise<IWorkflowStatus>;

interface IWorkflowBase {
    // unique id among node siblings
    id: string | number;
    // display name, fallback to id
    name?: string;
    // status of node
    status: IWorkflowStatus;
    // optional tags that works as a selectors - helps in generation of diagram e.g. for UI
    tags?: string[]
}

export interface IWorkflow extends IWorkflowBase {
    // list of phases in the workflow
    phases: IWorkflowPhase[];
    // initial params passed when workflow started
    // can be modified by consecutive steps
    paramStore?: WorkflowParamStore;
    // should we merge to the params store params passed by triggers, by default no
    mergeTriggerParams?: boolean;
    // step history
    history?: IActionConfig[];
    // current history index
    currentHistoryIndex?: number;
}

export interface IWorkflowPhase extends IWorkflowBase {
    // list of paths in phase, evaluated in parallel
    paths: IWorkflowPaths[];
}

export interface IWorkflowPaths extends IWorkflowBase {
    // list of steps in the path, evaluated in sequence
    steps: IWorkflowStep [];
}

interface IWorkflowStep extends IWorkflowBase, IStepConfig {
}

export interface IStepConfig {
    // how we should evaluate the step - if none provided we trigger onSuccess as soon as we hit this tep
    processor?: string | IProcessor;
    // list of actions for the successful rule execution:
    //  - callback returns true,
    //  - response to request arrives and/or returns true
    onSuccess?: Array<ActionType | IActionConfig>;
    // list of actions for the failed rule execution:
    //  - callback returns false,
    //  - response to request dont arrive before ttl or returns false
    //  - error when executing rule
    onFailure?: Array<ActionType | IActionConfig>;
}

export type WorkflowParamStore = { [key: string]: string | number | WorkflowParamStore | WorkflowParamStore[] };

export interface IProcessor {
    // trigger callback registered under id
    // - processors returns Promise
    // - processors are called with:
    //      - trigger params
    //      - global workflow ParamStore
    //      - step path (string[])
    //      - workflow object
    id?: string;
    // timestamp when executed
    calledDate?: number;
    // maximum time this step is valid for as number of ms or string matching /^[1-9]+(ms|s|min|h|d|w|m|y|){1}$/
    ttl?: number | string;
    // no of times rule has been evaluated (useful e.g. when retry have limit)
    calledCount?: number;
    // how many times we should retry until we trigger onFailure
    retryCount?: number
    // for how long we delay execution of the step
    retryDelay?: number
}

export interface IActionConfig {
    // type of action to take
    type: ActionType;
    // optional params
    params?: any;
}

export enum IWorkflowStatus {
    // dont act on node - its in the middle of processing - time after calling callback and before promise is resolved
    'PROCESSING' = -2,
    // state that indicates we are expecting external trigger
    'AWAITING' = -1,
    // ready to be processed
    'READY' = 0,
    // processed successfully
    'SUCCEDED' = 1,
    // failed while processing
    'FAILED' = 2,
    // skipped, wont be processed until reset
    'SKIPPED' = 3
}

export enum ActionType {
    // process specific step if ready
    PROCESS = 'PROCESS',
    // complete current, move to next step or if no next step available in current path next phase
    NEXT = 'NEXT',
    // make current ready, move to previous step
    PREVIOUS = 'PREVIOUS',
    // jump to specific step (as params provide path or array of paths ['phase id', 'path id', 'step id'])
    JUMP = 'JUMP',
    // reset all data on specific step / path & its children / phase & its children / workflow & its children
    RESET = 'RESET',
    // skip to specific step (as params provide number of steps to skip or path or array of paths ['phase id', 'path
    // id', 'step id'])
    SKIP = 'SKIP',
    // Close current flow or specific flow
    CLOSE = 'CLOSE',
    // Open new flow
    OPEN = 'OPEN',
    // undo changes done by previous steps/path/segment/workflow
    UNDO = 'UNDO',
    // redo changes done by previously undo steps/path/segment/workflow
    REDO = 'REDO'
}

// Path passed as an id:
const test: IWorkflow = {
    id: 'workflow-1',
    name: 'Workflow 1',
    status: IWorkflowStatus.READY,
    phases: [
        {
            id: 'phase-a',
            name: 'Phase A',
            status: IWorkflowStatus.READY,
            paths: [
                {
                    id: 'default-path',
                    name: 'Default path',
                    status: IWorkflowStatus.READY,
                    steps: [
                        {
                            id: 'step-a-1',
                            name: 'Step A-1',
                            status: IWorkflowStatus.READY,
                            processor: 'callback-a-1',
                            onSuccess: [
                                ActionType.NEXT
                            ],
                            onFailure: [
                                {
                                    type: ActionType.JUMP,
                                    params: ['phase-a','default-path', 'step-a-3']
                                }
                            ]
                        },
                        {
                            id: 'step-a-2',
                            name: 'Step A-2',
                            status: IWorkflowStatus.READY,
                            processor: 'callback-a-2',
                            onSuccess: [
                                ActionType.NEXT
                            ],
                            onFailure: [
                                {
                                    type: ActionType.JUMP,
                                    params: ['phase-a','default-path', 'step-a-3']
                                }
                            ]
                        },
                        {
                            id: 'step-a-3',
                            name: 'Step A-3',
                            status: IWorkflowStatus.READY,
                            processor: 'callback-a-3',
                            onSuccess: [
                                ActionType.NEXT
                            ],
                            onFailure: [
                                ActionType.CLOSE
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

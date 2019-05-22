interface IWorkflowBase {
    // unique id among node siblings
    id: string | number;
    // display name, fallback to id
    name?: string;
    // status of node
    status: Status;
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

// Possible flows:
//  - incoming -> step -> step
//  - incoming -> step -> callback -> step
//  - incoming -> step -> outgoing -> incoming -> step
// incoming request triggers

export interface IStepConfig {
    // way step expects to be triggered:
    // - STEP - triggered by previous step
    // - REQUEST - triggered by external request e.g. workflow/workflow_id/segment_id/path_id/trigger
    // - only first of paths steps can have this trigger
    // - defaults to STEP
    trigger?: TriggerType;
    // how we should evaluate the step - if none provided we trigger onSuccess as soon as we hit this tep
    processor?: IProcessor;
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
    // how we should evaluate the step:
    // - CALLBACK - we should use id and trigger callback registered under id
    // - GENERIC - processors exposed by workflow itself
    // - RESPONSE - we should use id and trigger callback registered under id, expect response via later call to step
    // - all processors returns Promise
    // - all processors are called with:
    //      - trigger params
    //      - global workflow ParamStore
    //      - step path (string[])
    //      - workflow object
    type: ProcessorType,
    // registered processors id or name if generic
    id?: string | ProcessorType;
    // timestamp when executed
    calledDate?: number;
    // maximum time this step is valid for as number of ms or string matching /^[1-9]+(ms|s|min|h|d|w|m|y|){1}$/
    ttl?: number | string;
    // no of times rule has been evaluated (useful e.g. when retry have limit)
    calledCount?: number;
    // how many times we should retry until we trigger onFailure
    retryCount?: number
}

export enum TriggerType {
    STEP = 'STEP',
    REQUEST = 'REQUEST',
}

export enum ProcessorType {
    CALLBACK = 'CALLBACK',
    GENERIC = 'GENERIC',
    REQUEST_RESPONSE = 'REQUEST_RESPONSE',
}

export enum ProcessorType {
    GLOBAL_PARAMS_EQUALS = 'GLOBAL_PARAMS_EQUALS',
    GLOBAL_PARAMS_NOT_EQUALS = 'GLOBAL_PARAMS_NOT_EQUALS',
    GLOBAL_PARAMS_INCLUDES = 'GLOBAL_PARAMS_INCLUDES',
    TRIGGER_PARAMS_EQUALS = 'TRIGGER_PARAMS_EQUALS',
    TRIGGER_PARAMS_NOT_EQUALS = 'TRIGGER_PARAMS_NOT_EQUALS',
    TRIGGER_PARAMS_INCLUDES = 'TRIGGER_PARAMS_INCLUDES',
}

export interface IActionConfig {
    // type of action to take
    type: ActionType;
    // optional params
    params?: any;
}


export enum Status {
    'READY' = 0,
    'PENDING' = 1,
    'SUCCEDED' = 2,
    'FAILED' = 3,
    'SKIPPED' = 4
}

export enum ActionType {
    // complete current, move to next step
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
    OPEN = 'OPEN'
}


// Path passed as an id:

const test: IWorkflow = {
    id: 'workflow-1',
    name: 'Workflow 1',
    status: Status.READY,
    phases: [
        {
            id: 'phase-a',
            name: 'Phase A',
            status: Status.READY,
            paths: [
                {
                    id: 'default-path',
                    name: 'Default path',
                    status: Status.READY,
                    steps: [
                        {
                            id: 'step-a-1',
                            name: 'Step A-1',
                            status: Status.READY,
                            trigger: TriggerType.STEP,
                            processor: {
                                type: ProcessorType.CALLBACK,
                                id: 'callback-a-1'
                            },
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
                            status: Status.READY,
                            trigger: TriggerType.STEP,
                            processor: {
                                type: ProcessorType.CALLBACK,
                                id: 'callback-a-2'
                            },
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
                            status: Status.READY,
                            trigger: TriggerType.STEP,
                            processor: {
                                type: ProcessorType.CALLBACK,
                                id: 'callback-a-3'
                            },
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

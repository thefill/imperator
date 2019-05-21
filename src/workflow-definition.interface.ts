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

export interface IWorkflow extends IWorkflowStep {
    // list of phases in the workflow
    phases: IWorkflowPhase[];
    // id of the workflow that was used to fastforward existing workflow
    fastforwardId?: number | string
}

export interface IWorkflowPhase extends IWorkflowStep {
    // list of paths in phase, evaluated in parallel
    paths: IWorkflowPaths[];
}

export interface IWorkflowPaths extends IWorkflowStep {
    // list of steps in the path, evaluated in sequence
    steps: IWorkflowStep [];
}

interface IWorkflowStep extends IWorkflowBase {
    // rules triggered every time we evaluate node
    rules?: IRule[];
    // no of times node has been evaluated (useful e.g. when retry have limit)
    count?: number;
    // params passed when executing step, passed to the rules
    params?: any;
}

export interface IRule extends IWorkflowBase {
    // type of rule
    type: RuleType;
    // params passed when executing rule
    params?: any;
    // timestamp when executed
    executed?: number;
    // maximum execution time
    ttl?: number;
    // list of actions for the successful rule execution:
    //  - callback returns true,
    //  - response to request arrives and/or returns true
    onSuccess?: IAction[];
    // list of actions for the failed rule execution:
    //  - callback returns false,
    //  - response to request dont arrive before ttl or returns false
    //  - error when executing rule
    onFailure?: IAction[];
}

export interface IAction {
    // type of action to take
    type: RuleOutcomeType;
    // optional params
    params?: any;
}

export enum RuleType {
    // Triggers registered actions that needs to resolve to Promise<boolean>
    CALLBACK = 'CALLBACK',
    // Triggers request that wont complete immediately and requires response
    REQUEST = 'REQUEST'
}

export enum Status {
    'READY' = 0,
    'PENDING' = 1,
    'SUCCEDED' = 2,
    'FAILED' = 3,
    'SKIPPED' = 4
}

export enum RuleOutcomeType {
    // complete current, move to next step
    NEXT = 'NEXT',
    // make current ready, move to previous step
    PREVIOUS = 'PREVIOUS',
    // request retry for current step
    RETRY = 'RETRY',
    // jump to specific step (as params provide path or array of paths ['phase id', 'path id', 'step id'])
    JUMP = 'JUMP',
    // skip to specific step (as params provide number of steps to skip or path or array of paths ['phase id', 'path id', 'step id'])
    SKIP = 'SKIP',
    // follow previous workflow with provided id by recreating each step and passing clone flag
    FASTFORWARD = 'FASTFORWARD',
    // Stop current flow and close it
    STOP = 'STOP',
    // Start new flow
    START = 'START'
}


// Path passed as an id:

const test: IWorkflow = {
    id: 'tps-hire',
    name: 'TPS hire',
    status: Status.READY,
    phases: [
        {
            id: 'setup',
            name: 'Setup phase',
            status: Status.READY,
            paths: [
                {
                    id: 'default',
                    name: 'Default path',
                    status: Status.READY,
                    steps: [
                        {
                            id: 'open-tps-hire',
                            name: 'Open TPS hire',
                            status: Status.READY,
                            rules: [
                                {
                                    id: 'open-tps-hire',
                                    name: 'Open TPS hire',
                                    status: Status.READY,
                                    type: RuleType.REQUEST,
                                    params: null,
                                    executed: null,
                                    ttl: 10000,
                                    onSuccess: [
                                        {
                                            type: RuleOutcomeType.NEXT,
                                            params: 5
                                        }
                                    ],
                                    onFailure: [
                                        {
                                            type: RuleOutcomeType.RETRY,
                                            params: 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 'capture-insurance-details',
                            name: 'Capture insurance details',
                            status: Status.READY
                        },
                        {
                            id: 'capture-licence-details',
                            name: 'Capture licence details',
                            status: Status.READY
                        },
                        {
                            id: 'validate-licence',
                            name: 'Validate licence',
                            status: Status.READY
                        }
                    ]
                }
            ]
        }
    ]
};
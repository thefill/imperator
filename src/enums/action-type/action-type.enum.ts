export enum ActionType {
    // execute specific processor, uses IProcessor as params
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
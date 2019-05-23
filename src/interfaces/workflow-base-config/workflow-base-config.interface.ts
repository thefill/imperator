import {WorkflowStatus} from '../../enums/workflow-status';
import {IActionConfig} from '../action-config';
import {ActionType} from '../../enums/action-type';

export interface IWorkflowBaseConfig {
    // unique id among node siblings
    id: string | number;
    // display name, fallback to id
    name?: string;
    // status of node
    status: WorkflowStatus;
    // optional tags that works as a selectors - helps in generation of diagram e.g. for UI
    tags?: string[];
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

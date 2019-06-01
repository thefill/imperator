import {ActionType} from '../../enums/action-type';
import {IActionConfig} from '../action-config';

/**
 * Workflow configuration base callbacks
 */
export interface IWorkflowBaseCallbacks {
    // List of actions for the successful rule/child node execution.
    // Successful rule execution:
    //  - callback returns true,
    //  - response to request arrives and/or returns true
    onSuccess?: Array<ActionType | IActionConfig>;
    // List of actions for the failed rule/child node execution.
    // Failed rule execution:
    //  - callback returns false,
    //  - response to request dont arrive before ttl or returns false
    //  - error when executing rule
    onFailure?: Array<ActionType | IActionConfig>;
    // List of actions for the errored rule/child node execution.
    // Error while rule execution:
    //  - error when executing rule
    onError?: Array<ActionType | IActionConfig>;
}

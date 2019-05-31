import {ActionType} from '../../enums';

/**
 * Definition of the action taken after success / failure / error
 * during evaluation of the step
 */
export interface IActionConfig {
    // type of action to take
    type: ActionType;
    // optional params used with action
    params?: any;
}

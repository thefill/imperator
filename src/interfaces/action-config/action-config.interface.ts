import {ActionType} from '../../enums';

export interface IActionConfig {
    // type of action to take
    type: ActionType;
    // optional params
    params?: any;
}

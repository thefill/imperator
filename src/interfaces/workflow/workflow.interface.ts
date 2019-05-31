import {IWorkflowConfig} from './workflow-config.interface';
import {IActionConfig} from '../action-config';
import {IWorkflowPhase} from '../workflow-phase';

/**
 * Workflow definition
 */
export interface IWorkflow extends IWorkflowConfig {
    // list of phases in the workflow
    phases: IWorkflowPhase[];
    // should we merge to the params store params passed by triggers, by default no
    mergeTriggerParams?: boolean;
    // step history
    history?: IActionConfig[];
    // current history index
    currentHistoryIndex?: number;
}

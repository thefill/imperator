import {IWorkflowParamStore} from '../workflow-param-store';
import {IActionConfig} from '../action-config';
import {IWorkflowBaseConfig} from '../workflow-base-config';
import {IWorkflowPhaseConfig} from '../workflow-phase-config';

export interface IWorkflowConfig extends IWorkflowBaseConfig {
    // list of phases in the workflow
    phases: IWorkflowPhaseConfig[];
    // initial params passed when workflow started
    // can be modified by consecutive steps
    paramStore?: IWorkflowParamStore;
    // should we merge to the params store params passed by triggers, by default no
    mergeTriggerParams?: boolean;
    // step history
    history?: IActionConfig[];
    // current history index
    currentHistoryIndex?: number;
}

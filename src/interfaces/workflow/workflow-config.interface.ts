import {IWorkflowBase} from '../workflow-base';
import {IWorkflowParamStore} from '../workflow-param-store';
import {IWorkflowPhaseConfig} from '../workflow-phase';

/**
 * Config object for the workflow
 */
export interface IWorkflowConfig extends IWorkflowBase {
    // list of phases in the workflow
    phases: IWorkflowPhaseConfig[];
    // initial params passed when workflow started
    // can be modified by consecutive steps
    paramStore?: IWorkflowParamStore;
}

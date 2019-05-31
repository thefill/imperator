import {IWorkflowBase, IWorkflowBaseCallbacks} from '../workflow-base';
import {IWorkflowPathConfig} from '../workflow-path';

export interface IWorkflowPhaseConfig extends IWorkflowBase {
    // list of paths in phase, evaluated in parallel
    paths: IWorkflowPathConfig[];
}

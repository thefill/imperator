import {IWorkflowBaseConfig} from '../workflow-base-config';
import {IWorkflowPathConfig} from '../workflow-path-config';

export interface IWorkflowPhaseConfig extends IWorkflowBaseConfig {
    // list of paths in phase, evaluated in parallel
    paths: IWorkflowPathConfig[];
}

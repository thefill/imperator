import {IWorkflowPhaseConfig} from './workflow-phase-config.interface';
import {IWorkflowPath} from '../workflow-path';

export interface IWorkflowPhase extends IWorkflowPhaseConfig {
    // list of paths in phase, evaluated in parallel
    paths: IWorkflowPath[];
}

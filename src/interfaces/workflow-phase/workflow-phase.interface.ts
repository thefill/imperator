import {IWorkflowPath} from '../workflow-path';
import {IWorkflowPhaseConfig} from './workflow-phase-config.interface';

export interface IWorkflowPhase extends IWorkflowPhaseConfig {
    // list of paths in phase, evaluated in parallel
    paths: IWorkflowPath[];
}

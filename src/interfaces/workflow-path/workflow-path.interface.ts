import {IWorkflowStep} from '../workflow-step';
import {IWorkflowPathConfig} from './workflow-path-config.interface';

/**
 * Workflow path definition
 */
export interface IWorkflowPath extends IWorkflowPathConfig {
    // list of steps in the path, evaluated in sequence
    steps: IWorkflowStep[];
}

import {IWorkflowBaseConfig} from '../workflow-base-config';
import {IWorkflowStep} from '../workflow-step';

export interface IWorkflowPathConfig extends IWorkflowBaseConfig {
    // list of steps in the path, evaluated in sequence
    steps: IWorkflowStep [];
}

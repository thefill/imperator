import {IWorkflowBaseCallbacks} from './workflow-base-callbacks.interface';
import {IWorkflowBaseIdentification} from './workflow-base-identification.interface';
import {IWorkflowBaseStatus} from './workflow-base-status.interface';

/**
 * Workflow configuration base
 */
export interface IWorkflowBase
    extends IWorkflowBaseCallbacks, IWorkflowBaseIdentification, IWorkflowBaseStatus {
}

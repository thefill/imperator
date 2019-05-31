import {WorkflowStatus} from '../../enums/workflow-status';

/**
 * Workflow configuration base status
 */
export interface IWorkflowBaseStatus {
    // status of node
    status: WorkflowStatus;
}

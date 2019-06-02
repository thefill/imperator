import {WorkflowStatus} from '../../enums/workflow-status';
import {IWorkflow} from '../workflow';

/**
 * Definition of workflow data service
 */
export interface IWorkflowDataService {
    // Has the service been already initialised
    initialised: boolean;

    /**
     * Initialise service
     * @returns {Promise<void>}
     */
    init(...args: any): Promise<void>;

    /**
     * Get workflow by id
     * @param {string} workflowId Workflow id
     * @returns {Promise<IWorkflow>}
     */
    get(workflowId: string): Promise<IWorkflow>;

    /**
     * Get all workflows by provided state
     * @param {WorkflowStatus} status Workflow status
     * @returns {Promise<IWorkflow[]>}
     */
    getByStatus(status: WorkflowStatus): Promise<IWorkflow[]>;

    /**
     * Check if workflow exists
     * @param {string} workflowId
     * @returns {Promise<boolean>}
     */
    exists(workflowId: string): Promise<boolean>;

    /**
     * Create non-existing workflow
     * @param {IWorkflow} workflow Workflow data
     * @returns {Promise<void>}
     */
    set(workflow: IWorkflow): Promise<void>;

    /**
     * Update existing workflow
     * @param {IWorkflow} workflow Workflow data
     * @returns {Promise<void>}
     */
    update(workflow: IWorkflow): Promise<void>;
}

import {IActionConfig} from '../action-config';
import {IProcessor} from '../processor';
import {IWorkflow, IWorkflowConfig} from '../workflow';
import {IWorkflowSelector} from '../workflow-selector';
import {IWorkflowSnapshot} from '../workflow-snapshot';

/**
 * Definition for workflow controller
 */
export interface IWorkflowController {

    /**
     * Set processor
     * @param {IProcessor} processor
     */
    setProcessor(processor: IProcessor): void;

    /**
     * Unset processor
     * @param {string} processorId
     */
    unsetProcessor(processorId: string): void;

    /**
     * Set workflow
     * @param {IWorkflowConfig} config Workflow config
     * @returns {Promise<void>}
     */
    set(config: IWorkflowConfig): Promise<void>;

    /**
     * Unset workflow
     * @param {string} workflowId Workflow id
     * @returns {Promise<void>}
     */
    unset(workflowId: string): Promise<void>;

    /**
     * Evaluate workflow
     * @param {string} workflowId Workflow id
     * @returns {Promise<void>}
     */
    evaluate(workflowId: string): Promise<void>;

    /**
     * Trigger action for workflow
     * @param {IWorkflowSelector} selector Selector which node to trigger the action against
     * @param {IActionConfig} action
     * @param {boolean} force Should we force action even that state of workflow
     *                        Does not allow it?
     * @returns {Promise<void>}
     */
    trigger(
        selector: IWorkflowSelector,
        action: IActionConfig,
        force?: boolean
    ): Promise<void>;

    /**
     * Retrieve snapshot of the workflow
     * @param {string} workflowId Workflow id
     * @returns {Promise<IWorkflowSnapshot>}
     */
    snapshot(workflowId: string): Promise<IWorkflowSnapshot>;

    /**
     * Get workflow instance
     * @param {string} workflowId Workflow id
     * @returns {Promise<IWorkflow>}
     */
    get(workflowId: string): Promise<IWorkflow>;
}
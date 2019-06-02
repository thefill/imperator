import {WorkflowStatus} from '../../enums';
import {IProcessor} from '../processor';
import {IWorkflow} from '../workflow';

/**
 * Definition for processor controller
 */
export interface IProcessorController {
    /**
     * Initialise controller
     * @returns {Promise<void>}
     */
    init(...args: any): Promise<void>;

    /**
     * Set processor
     * @param {IProcessor} processor
     */
    set(processor: IProcessor): void;

    /**
     * Unset processor
     * @param {string} processorId
     */
    unset(processorId: string): void;

    /**
     * Evaluate processor
     * @param {string} processorId Workflow id
     * @returns {Promise<void>}
     */
    execute(processorId: string): Promise<WorkflowStatus>;

    /**
     * Get workflow instance
     * @param {string} processorId Workflow id
     * @returns {Promise<IWorkflow>}
     */
    get(processorId: string): IProcessor;
}

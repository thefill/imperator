import {IProcessor} from '../processor';
import {IWorkflow} from '../workflow';

/**
 * Definition of processor repository
 */
export interface IProcessorRepository {
    // Has the repository been already initialised
    initialised: boolean;

    /**
     * Initialise repository
     * @returns {Promise<void>}
     */
    init(...args: any): Promise<void>;

    /**
     * Get workflow by id
     * @param {string} processorId Processor id
     * @returns {Promise<IWorkflow>}
     */
    get(processorId: string): Promise<IProcessor>;

    /**
     * Check if processor exists
     * @param {string} processor Processor id
     * @returns {Promise<boolean>}
     */
    exists(processor: string): Promise<boolean>;

    /**
     * Create non-existing workflow
     * @param {IWorkflow} processor pProcessor definition
     * @returns {Promise<void>}
     */
    set(processor: IProcessor): Promise<void>;

    /**
     * Update existing processor
     * @param {IWorkflow} processor Processor definition
     * @returns {Promise<void>}
     */
    update(processor: IProcessor): Promise<void>;
}

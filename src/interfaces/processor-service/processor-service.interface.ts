import {IProcessor} from '../processor';

/**
 * Definition of processor service
 */
export interface IProcessorService {
    // Has the service been already initialised
    initialised: boolean;

    /**
     * Initialise service
     * @returns {Promise<void>}
     */
    init(...args: any): Promise<void>;

    /**
     * Get processor by id
     * @param {string} processorId Processor id
     * @returns {Promise<IProcessor>}
     */
    get(processorId: string): Promise<IProcessor>;

    /**
     * Check if processor exists
     * @param {string} processor Processor id
     * @returns {Promise<boolean>}
     */
    exists(processor: string): Promise<boolean>;

    /**
     * Create non-existing processor
     * @param {IProcessor} processor pProcessor definition
     * @returns {Promise<void>}
     */
    set(processor: IProcessor): Promise<void>;

    /**
     * Update existing processor
     * @param {IProcessor} processor Processor definition
     * @returns {Promise<void>}
     */
    update(processor: IProcessor): Promise<void>;
}

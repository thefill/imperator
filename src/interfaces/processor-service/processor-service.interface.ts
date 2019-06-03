import {IInstance} from '../instance';
import {IProcessor} from '../processor';

/**
 * Definition of processor service
 */
export interface IProcessorService extends IInstance {
    /**
     * Get processor by id
     * @param {string} processorId Processor id
     * @returns {Promise<IProcessor>}
     */
    get(processorId: string): Promise<IProcessor>;

    /**
     * Check if processor exists
     * @param {string} processorId Processor id
     * @returns {Promise<boolean>}
     */
    exists(processorId: string): Promise<boolean>;

    /**
     * Create non-existing processor
     * @param {IProcessor} processor pProcessor definition
     * @returns {Promise<void>}
     */
    set(processor: IProcessor): Promise<void>;

    /**
     * Create non-existing processor
     * @param {string} processorId Processor id
     * @returns {Promise<void>}
     */
    unset(processorId: string): Promise<void>;

    /**
     * Update existing processor
     * @param {IProcessor} processor Processor definition
     * @returns {Promise<void>}
     */
    update(processor: IProcessor): Promise<void>;
}

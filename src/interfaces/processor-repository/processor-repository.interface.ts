import {IInstance} from '../instance';
import {IProcessor} from '../processor';

/**
 * Definition of processor repository
 */
export interface IProcessorRepository extends IInstance {
    /**
     * Get workflow by id
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
     * @param {IProcessor} processor Processor definition
     * @returns {Promise<void>}
     */
    set(processor: IProcessor): Promise<void>;

    /**
     * Remove existing processor
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

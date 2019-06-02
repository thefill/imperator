import {ILogRepositoryContext} from './log-repository-context.interface';

/**
 * Interface for log repository - repository used to log events in the workflow
 */
export interface ILogRepository {
    // Has the repository been already initialised
    initialised: boolean;

    /**
     * Initialise repository
     * @returns {Promise<void>}
     */
    init(...args: any): Promise<void>;

    /**
     * Method to log minor events
     * @param {string} message Event message
     * @param {ILogRepositoryContext} context Context around event
     * @returns {Promise<void>}
     */
    log(message: string, context: ILogRepositoryContext): Promise<void>;

    /**
     * Method to log warn events
     * @param {string} message Event message
     * @param {ILogRepositoryContext} context Context around event
     * @returns {Promise<void>}
     */
    warn(message: string, context: ILogRepositoryContext): Promise<void>;

    /**
     * Method to log errors events
     * @param {string} message Event message
     * @param {ILogRepositoryContext} context Context around event
     * @returns {Promise<void>}
     */
    error(message: string, context: ILogRepositoryContext): Promise<void>;

    /**
     * Method to log major events
     * @param {string} message Event message
     * @param {ILogRepositoryContext} context Context around event
     * @returns {Promise<void>}
     */
    info(message: string, context: ILogRepositoryContext): Promise<void>;
}

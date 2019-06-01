import {ILogRepositoryContext} from '../log-repository';

/**
 * Definition of processor service
 */
export interface ILogService {
    /**
     * Initialise service
     * @returns {Promise<void>}
     */
    init(): Promise<void>;

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

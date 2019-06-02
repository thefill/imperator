import {ILogRepository, ILogRepositoryContext} from '../../interfaces';

/**
 * Main class for in-memory log repository
 */
export class InMemoryLogRepository implements ILogRepository {
    /**
     * Compose message
     * @param {string} message Message provided
     * @param {ILogRepositoryContext} context Message context
     * @returns {string}
     */
    protected static composeMessage(message: string, context: ILogRepositoryContext) {
        return `${message} | ${context.name}`;
    }

    public initialised = false;

    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'In-memory log repository';

    public async init(): Promise<void> {
        await this.log('Initialised', {name: this.name, scope: this});
        this.initialised = true;
        return Promise.resolve();
    }

    public log(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        // tslint:disable-next-line
        console.log(logMessage, context.scope, context.data);
        return Promise.resolve();
    }

    public warn(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        // tslint:disable-next-line
        console.warn(logMessage, context.scope, context.data);
        return Promise.resolve();
    }

    public error(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        // tslint:disable-next-line
        console.error(logMessage, context.scope, context.data);
        return Promise.resolve();
    }

    public info(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        // tslint:disable-next-line
        console.info(logMessage, context.scope, context.data);
        return Promise.resolve();
    }

}

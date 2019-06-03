import {ILogRepository, ILogRepositoryContext} from '../../interfaces';
import {Instance} from '../instance';

/**
 * Main class for in-memory log repository
 */
export class InMemoryLogRepository extends Instance implements ILogRepository {
    /**
     * Compose message
     * @param {string} message Message provided
     * @param {ILogRepositoryContext} context Message context
     * @returns {string}
     */
    protected static composeMessage(message: string, context: ILogRepositoryContext) {
        return `${message} | ${context.name}`;
    }

    public name = 'In-memory log repository';

    public log(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        if (context.data) {
            // tslint:disable-next-line
            console.log(logMessage, context.data);
        } else {
            // tslint:disable-next-line
            console.log(logMessage);
        }
        return Promise.resolve();
    }

    public warn(message: string, context: any): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        if (context.data) {
            // tslint:disable-next-line
            console.warn(logMessage, context.data);
        } else {
            // tslint:disable-next-line
            console.warn(logMessage);
        }
        return Promise.resolve();
    }

    public error(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        if (context.data) {
            // tslint:disable-next-line
            console.error(logMessage, context.data, context.scope);
        } else {
            // tslint:disable-next-line
            console.error(logMessage);
        }
        return Promise.resolve();
    }

    public info(message: string, context: ILogRepositoryContext): Promise<void> {
        // prepare message
        const logMessage = InMemoryLogRepository.composeMessage(message, context);

        if (context.data) {
            // tslint:disable-next-line
            console.info(logMessage, context.data);
        } else {
            // tslint:disable-next-line
            console.info(logMessage);
        }
        return Promise.resolve();
    }

    protected async setDependencies() {
        this.logService = this;
    }
}

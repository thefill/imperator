/**
 * Main class for in-memory log repository
 */
export class InMemoryLogRepository {
    /**
     * Compose message
     * @param {string} message Message provided
     * @param {any} context Message context
     * @returns {string}
     */
    protected static composeMessage(message: string, context: any) {
        return `${message} | ${context.name}`;
    }

    public initialised = false;

    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'In-memory log repository';

    public async init(): Promise<void> {
        this.initialised = true;
        
        await this.log('Initialised', {name: this.name, scope: this});
        return Promise.resolve();
    }

    public log(message: string, context: any): Promise<void> {
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

    public error(message: string, context: any): Promise<void> {
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

    public info(message: string, context: any): Promise<void> {
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

}

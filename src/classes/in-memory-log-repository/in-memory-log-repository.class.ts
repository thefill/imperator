import {ILogRepository, ILogRepositoryContext} from '../../interfaces';

/**
 * Main class for in-memory log repository
 */
export class InMemoryLogRepository implements ILogRepository {
    public init(): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public log(message: string, context: ILogRepositoryContext): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public warn(message: string, context: ILogRepositoryContext): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public error(message: string, context: ILogRepositoryContext): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public info(message: string, context: ILogRepositoryContext): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

}

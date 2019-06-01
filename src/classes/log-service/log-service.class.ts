import {ILogRepository, ILogRepositoryContext} from '../../interfaces';
import {ILogService, ILogServiceConfig} from '../../interfaces/log-service';
import {InMemoryLogRepository} from '../in-memory-log-repository';

/**
 * Main class for workflow controller
 */
export class LogService implements ILogService {
    protected repository: ILogRepository;

    constructor(config: ILogServiceConfig) {
        this.applyConfig(config);

        // if no data repository provided fallback to default one
        if (!this.repository) {
            this.repository = new InMemoryLogRepository();
        }
    }

    public async init(): Promise<void> {
        await this.repository.init();
    }

    public log(message: string, context: ILogRepositoryContext): Promise<void> {
        return this.repository.log(message, context);
    }

    public warn(message: string, context: ILogRepositoryContext): Promise<void> {
        return this.repository.warn(message, context);
    }

    public error(message: string, context: ILogRepositoryContext): Promise<void> {
        return this.repository.error(message, context);
    }

    public info(message: string, context: ILogRepositoryContext): Promise<void> {
        return this.repository.info(message, context);
    }

    protected applyConfig(config: ILogServiceConfig) {
        Object.apply(this, config);

        // if no repository provided fallback to default one
        if (!this.repository) {
            // TODO: create fallback to default data repository
        }
    }
}

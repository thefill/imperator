import {ILogRepository, ILogRepositoryContext} from '../../interfaces';
import {ILogService, ILogServiceConfig} from '../../interfaces/log-service';

/**
 * Main class for workflow controller
 */
export class LogService implements ILogService {
    public initialised = false;
    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'Log service';
    protected repository: ILogRepository;

    constructor(config?: ILogServiceConfig) {
        this.applyConfig(config);
    }

    public async init(): Promise<void> {
        console.log(1111);
        await this.repository.init();
        this.initialised = true;
        await this.log('Initialised', {name: this.name, scope: this});
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

    protected applyConfig(config?: ILogServiceConfig) {
        if (config) {
            Object.assign(this, config);
        }
    }
}

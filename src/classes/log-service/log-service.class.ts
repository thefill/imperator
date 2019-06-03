import {ILogRepository, ILogRepositoryContext} from '../../interfaces';
import {ILogService, ILogServiceConfig} from '../../interfaces/log-service';
import {Instance} from '../instance';

/**
 * Main class for workflow controller
 */
export class LogService extends Instance<ILogServiceConfig> implements ILogService {
    public name = 'Log service';
    protected repository: ILogRepository;

    public async init(): Promise<void> {
        await this.repository.init();
        await super.init();
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
}

import {ILogRepository} from '../log-repository';

/**
 * Config for the log service
 */
export interface ILogServiceConfig {
    // Data repository used to preserve logs
    repository: ILogRepository;
    // config for the repository
    repositoryConfig?: any;
}

import {ILogRepository} from '../log-repository';

/**
 * Config for the processor controller
 */
export interface IProcessorControllerConfig {
    // Data repository used to preserve logs
    logsRepository?: ILogRepository;
}

import {IProcessorRepository} from '../processor-repository';

/**
 * Config for the processor service
 */
export interface IProcessorServiceConfig {
    // Data repository used to preserve processors
    repository?: IProcessorRepository;
    // config for the repository
    repositoryConfig?: any;
}

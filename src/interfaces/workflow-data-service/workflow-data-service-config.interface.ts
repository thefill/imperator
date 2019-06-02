import {IWorkflowDataRepository} from '../workflow-data-repository';

/**
 * Config for the workflow data service
 */
export interface IWorkflowDataServiceConfig {
    // Data repository used to preserve processors
    repository?: IWorkflowDataRepository;
    // config for the repository
    repositoryConfig?: any;
}

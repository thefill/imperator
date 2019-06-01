import {ILogRepository} from '../log-repository';
import {IWorkflowDataRepository} from '../workflow-data-repository';

/**
 * Config for the workflow controller
 */
export interface IWorkflowControllerConfig {
    // Data repository used to preserve and retrieve workflow
    dataRepository?: IWorkflowDataRepository;
    // Data repository used to preserve logs
    logsRepository?: ILogRepository;
}

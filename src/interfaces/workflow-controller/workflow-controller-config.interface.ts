import {IWorkflowDataRepository} from '../workflow-data-repository';
import {IWorkflowLogRepository} from '../workflow-log-repository';

/**
 * Config for the workflow controller
 */
export interface IWorkflowControllerConfig {
    // Data repository used to preserve and retrieve workflow
    dataRepository?: IWorkflowDataRepository;
    // Data repository used to preserve logs
    logsRepository?: IWorkflowLogRepository;
}

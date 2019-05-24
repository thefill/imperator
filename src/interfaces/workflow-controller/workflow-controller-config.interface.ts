import {IWorkflowDataRepository} from '../workflow-data-repository';
import {IWorkflowLogRepository} from '../workflow-log-repository';

export interface IWorkflowControllerConfig {
    dataRepository?: IWorkflowDataRepository
    logsRepository?: IWorkflowLogRepository
}

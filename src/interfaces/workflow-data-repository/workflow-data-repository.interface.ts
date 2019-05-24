import {WorkflowStatus} from '../../enums/workflow-status';
import {IWorkflowConfig} from '../workflow';

export interface IWorkflowDataRepository {
    hydrate(): Promise<IWorkflowConfig[]>;

    getAll(): Promise<IWorkflowConfig[]>;

    getById(id:string): Promise<IWorkflowConfig>;

    getByStatus(status: WorkflowStatus): Promise<IWorkflowConfig>;

    set(workflows: IWorkflowConfig[]): Promise<void>;

    update(workflows: IWorkflowConfig[]): Promise<void>;
}

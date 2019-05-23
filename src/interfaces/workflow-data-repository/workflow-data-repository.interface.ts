import {IWorkflowConfig} from '../workflow-config';

export interface IWorkflowDataRepository {
    hydrate(): Promise<IWorkflowConfig[]>;

    get(): Promise<IWorkflowConfig>;

    set(): Promise<void>;

    update(): Promise<void>;
}

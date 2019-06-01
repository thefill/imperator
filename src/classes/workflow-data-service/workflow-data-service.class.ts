import {WorkflowStatus} from '../../enums';
import {IWorkflow, IWorkflowDataRepository, IWorkflowDataService, IWorkflowDataServiceConfig} from '../../interfaces';

/**
 * Main class for workflow controller
 */
export class WorkflowDataService implements IWorkflowDataService {
    protected repository: IWorkflowDataRepository;

    constructor(config: IWorkflowDataServiceConfig) {
        this.applyConfig(config);

        // if no data repository provided fallback to default one
        if (!this.repository) {
            // TODO: create fallback to default data repository
        }
    }

    public async init(): Promise<void> {
        await this.repository.init();
    }

    public get(workflowId: string): Promise<IWorkflow> {
        // TODO: implement
        return Promise.resolve({
            id: '11',
            name: 'ddd',
            status: WorkflowStatus.READY,
            phases: []
        });
    }

    public getByStatus(status: WorkflowStatus): Promise<IWorkflow[]> {
        // TODO: implement
        return Promise.resolve([{
            id: '11',
            name: 'ddd',
            status: WorkflowStatus.READY,
            phases: []
        }]);
    }

    public exists(workflowId: string): Promise<boolean> {
        // TODO: implement
        return Promise.resolve(false);
    }

    public set(workflow: IWorkflow): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public update(workflow: IWorkflow): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    protected applyConfig(config: IWorkflowDataServiceConfig) {
        Object.apply(this, config);

        // if no repository provided fallback to default one
        if (!this.repository) {
            // TODO: create fallback to default data repository
        }
    }
}

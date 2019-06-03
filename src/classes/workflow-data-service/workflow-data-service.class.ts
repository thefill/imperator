import {jetli} from 'jetli';
import {WorkflowDependency, WorkflowStatus} from '../../enums';
import {IWorkflow, IWorkflowDataRepository, IWorkflowDataService, IWorkflowDataServiceConfig} from '../../interfaces';
import {LogService} from '../log-service';

/**
 * Main class for workflow controller
 */
export class WorkflowDataService implements IWorkflowDataService {
    public initialised = false;
    protected logService: LogService;
    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'Workflow data service';
    protected repository: IWorkflowDataRepository;

    constructor(config?: IWorkflowDataServiceConfig) {
        this.applyConfig(config);
    }

    public async init(): Promise<void> {
        await this.setDependencies();
        await this.repository.init();
        this.initialised = true;

        await this.logService.log('Initialised', {name: this.name, scope: this});
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

    protected async setDependencies() {
        this.logService = await jetli.get(WorkflowDependency.LogService);
    }

    protected applyConfig(config?: IWorkflowDataServiceConfig) {
        if (config) {
            Object.assign(this, config);
        }
    }
}

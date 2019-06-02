import {Jetli} from 'jetli';
import {WorkflowDependency, WorkflowStatus} from '../../enums';
import {IWorkflow, IWorkflowDataRepository, IWorkflowDataService, IWorkflowDataServiceConfig} from '../../interfaces';
import {LogService} from '../log-service';

/**
 * Main class for workflow controller
 */
export class WorkflowDataService implements IWorkflowDataService {
    public initialised = false;
    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'Workflow data service';
    protected repository: IWorkflowDataRepository;
    protected logService: LogService;

    constructor(config?: IWorkflowDataServiceConfig) {
        this.applyConfig(config);
    }

    public async init(jetli: Jetli): Promise<void> {
        await this.repository.init();
        this.logService = await jetli.get(WorkflowDependency.LogService);
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

    protected applyConfig(config?: IWorkflowDataServiceConfig) {
        if (config) {
            Object.apply(this, config);
        }
    }
}

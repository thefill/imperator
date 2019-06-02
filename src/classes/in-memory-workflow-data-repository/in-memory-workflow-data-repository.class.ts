import {Jetli} from 'jetli';
import {WorkflowDependency, WorkflowStatus} from '../../enums';
import {IWorkflow, IWorkflowDataRepository} from '../../interfaces';
import {LogService} from '../log-service';

/**
 * Main class for in-memory workflow data repository
 */
export class InMemoryWorkflowDataRepository implements IWorkflowDataRepository {
    public initialised = false;
    protected logService: LogService;

    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'In-memory workflow data repository';


    public async init(jetli: Jetli): Promise<void> {
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

}

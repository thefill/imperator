import {WorkflowStatus} from '../../enums';
import {IWorkflow, IWorkflowDataRepository, IWorkflowDataService, IWorkflowDataServiceConfig} from '../../interfaces';
import {Instance} from '../instance';

/**
 * Main class for workflow controller
 */
export class WorkflowDataService extends Instance<IWorkflowDataServiceConfig> implements IWorkflowDataService {
    public name = 'Workflow data service';
    protected repository: IWorkflowDataRepository;

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

    public unset(workflowId: string): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public update(workflow: IWorkflow): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }
}

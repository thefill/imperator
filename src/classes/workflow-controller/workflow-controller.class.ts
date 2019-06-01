import {WorkflowStatus} from '../../enums';
import {
    IActionConfig,
    ILogService,
    IProcessor,
    IProcessorService,
    IWorkflow,
    IWorkflowConfig,
    IWorkflowController,
    IWorkflowControllerConfig,
    IWorkflowSelector,
    IWorkflowSnapshot
} from '../../interfaces';
import {WorkflowDataService} from '../workflow-data-service';

/**
 * Main class for workflow controller
 */
export class WorkflowController implements IWorkflowController {
    protected processorService: IProcessorService;
    protected workflowDataService: WorkflowDataService;
    protected logService: ILogService;

    constructor(config: IWorkflowControllerConfig) {
        // TODO: inject processorService & add config with repo
        // TODO: inject dataService & add config with repo
        // TODO: inject logService & add config with repo
    }

    public setProcessor(processor: IProcessor): void {
        // TODO: implement
        return;
    }

    public unsetProcessor(processorId: string): void {
        // TODO: implement
        return;
    }

    public set(config: IWorkflowConfig) {
        // TODO: implement
        return Promise.resolve();
    }

    public unset(workflowId: string) {
        // TODO: implement
        return Promise.resolve();
    }

    public evaluate(workflowId: string) {
        // TODO: implement
        return Promise.resolve();
    }

    // trigger
    public trigger(
        selector: IWorkflowSelector,
        action: IActionConfig,
        force?: boolean
    ) {
        // TODO: implement
        return Promise.resolve();
    }

    public snapshot(workflowId: string): Promise<IWorkflowSnapshot> {
        // TODO: implement
        return Promise.resolve({
            id: '11',
            name: 'ddd',
            status: WorkflowStatus.READY,
            phases: []
        });
    }

    public get(workflowId: string): Promise<IWorkflow> {
        return Promise.resolve({
            id: '11',
            name: 'ddd',
            status: WorkflowStatus.READY,
            phases: []
        });
    }
}

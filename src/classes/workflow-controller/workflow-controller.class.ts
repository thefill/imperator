import {jetli} from 'jetli';
import {WorkflowDependency, WorkflowStatus} from '../../enums';
import {
    IActionConfig,
    ILogRepository,
    ILogServiceConfig,
    IProcessor,
    IProcessorRepository,
    IProcessorServiceConfig,
    IWorkflow,
    IWorkflowConfig,
    IWorkflowController,
    IWorkflowControllerConfig,
    IWorkflowDataRepository,
    IWorkflowDataServiceConfig,
    IWorkflowSelector,
    IWorkflowSnapshot
} from '../../interfaces';
import {InMemoryLogRepository} from '../in-memory-log-repository';
import {InMemoryProcessorRepository} from '../in-memory-processor-repository';
import {InMemoryWorkflowDataRepository} from '../in-memory-workflow-data-repository';
import {LogService} from '../log-service';
import {ProcessorService} from '../processor-service';
import {WorkflowDataService} from '../workflow-data-service';

/**
 * Main class for workflow controller
 */
export class WorkflowController implements IWorkflowController {
    public initialised = false;
    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'Workflow controller';

    // Repositories
    protected dataRepository: IWorkflowDataRepository;
    protected logRepository: ILogRepository;
    protected processorRepository: IProcessorRepository;

    // Services
    protected processorService: ProcessorService;
    protected workflowDataService: WorkflowDataService;
    protected logService: LogService;

    constructor(config?: IWorkflowControllerConfig) {
        this.applyConfig(config);
    }

    public async init(): Promise<void> {
        await this.setupDependencies();

        // retrieve services
        // this.logService = await jetli.get(WorkflowDependency.LogService);
        // this.processorService = await jetli.get(WorkflowDependency.ProcessorService);
        // this.workflowDataService = await jetli.get(WorkflowDependency.WorkflowDataService);

        // await this.logService.log('Initialised', {name: this.name, scope: this});
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

    protected async setupDependencies() {
        // Setup service configs
        const logServiceConfig: ILogServiceConfig = {
            repository: this.logRepository
        };
        const processorServiceConfig: IProcessorServiceConfig = {
            repository: this.processorRepository
        };
        const dataServiceConfig: IWorkflowDataServiceConfig = {
            repository: this.dataRepository
        };

        // register service in the injector
        await jetli.set(WorkflowDependency.LogService, LogService, true, logServiceConfig);
        await jetli.set(WorkflowDependency.ProcessorService, ProcessorService, true, processorServiceConfig);
        await jetli.set(WorkflowDependency.WorkflowDataService, WorkflowDataService, true, dataServiceConfig);
    }

    protected applyConfig(config?: IWorkflowControllerConfig) {
        if (config) {
            Object.assign(this, config);
        }

        // set global repositories
        // if no log repository provided fallback to default one
        if (!this.logRepository) {
            this.logRepository = new InMemoryLogRepository();
        }

        // if no processor repository provided fallback to default one
        if (!this.processorRepository) {
            this.processorRepository = new InMemoryProcessorRepository();
        }

        // if no data repository provided fallback to default one
        if (!this.dataRepository) {
            this.dataRepository = new InMemoryWorkflowDataRepository();
        }
    }
}

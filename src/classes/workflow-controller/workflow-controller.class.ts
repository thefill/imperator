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
import {Instance} from '../instance';
import {LogService} from '../log-service';
import {ProcessorService} from '../processor-service';
import {WorkflowDataService} from '../workflow-data-service';

/**
 * Main class for workflow controller
 */
export class WorkflowController extends Instance<IWorkflowControllerConfig> implements IWorkflowController {
    protected static toSnapshot(workflow: IWorkflow): IWorkflowSnapshot {
        // TODO: implement
        return {
            id: '11',
            name: 'ddd',
            status: WorkflowStatus.READY,
            phases: []
        };
    }

    public name = 'Workflow controller';
    // Repositories
    protected logRepository: ILogRepository;
    protected processorRepository: IProcessorRepository;
    protected dataRepository: IWorkflowDataRepository;
    // Services
    protected processorService: ProcessorService;
    protected workflowDataService: WorkflowDataService;

    constructor(config?: IWorkflowControllerConfig) {
        super(config);
    }

    public async init(): Promise<void> {
        await this.setupDependencies();
        await this.setDependencies();

        await this.logService.log('Initialised', {name: this.name, scope: this});
    }

    public async setProcessor(processor: IProcessor): Promise<void> {
        try {
            await this.processorService.set(processor);
        } catch (error) {
            await this.logService.error(
                'Set processor failed',
                {
                    name: this.name,
                    scope: this,
                    data: {processor, error}
                }
            );

            return Promise.reject(error);
        }
    }

    public async unsetProcessor(processorId: string): Promise<void> {
        try {
            await this.processorService.unset(processorId);
        } catch (error) {
            await this.logService.error(
                'Unset processor failed',
                {
                    name: this.name,
                    scope: this,
                    data: {processorId, error}
                }
            );

            return Promise.reject(error);
        }
    }

    public async set(config: IWorkflowConfig): Promise<void> {
        try {
            await this.workflowDataService.set(config);
        } catch (error) {
            await this.logService.error(
                'Set workflow failed',
                {
                    name: this.name,
                    scope: this,
                    data: {config, error}
                }
            );

            return Promise.reject(error);
        }
    }

    public async unset(workflowId: string): Promise<void> {
        try {
            await this.workflowDataService.unset(workflowId);
        } catch (error) {
            await this.logService.error(
                'Unset workflow failed',
                {
                    name: this.name,
                    scope: this,
                    data: {workflowId, error}
                }
            );

            return Promise.reject(error);
        }

        return Promise.resolve();
    }

    // TODO: do we need this? E.g. when timeout hmm?
    // can trigger trigger(id, action)
    public evaluate(workflowId: string): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    // trigger
    public trigger(
        selector: IWorkflowSelector,
        action: IActionConfig,
        force?: boolean
    ): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public async snapshot(workflowId: string): Promise<IWorkflowSnapshot> {
        let workflow: IWorkflow;

        try {
            workflow = await this.workflowDataService.get(workflowId);
        } catch (error) {
            await this.logService.error(
                'Get workflow snapshot failed',
                {
                    name: this.name,
                    scope: this,
                    data: {workflowId, error}
                }
            );

            return Promise.reject(error);
        }

        return WorkflowController.toSnapshot(workflow);
    }

    public async get(workflowId: string): Promise<IWorkflow> {
        let workflow: IWorkflow;
        try {
            workflow = await this.workflowDataService.get(workflowId);
        } catch (error) {
            await this.logService.error(
                'Get workflow failed',
                {
                    name: this.name,
                    scope: this,
                    data: {workflowId, error}
                }
            );
            return Promise.reject(error);
        }
        return workflow;
    }

    public applyConfig(config?: IWorkflowControllerConfig) {
        super.applyConfig(config);

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

    protected async setDependencies() {
        super.setDependencies();
        // retrieve services
        this.processorService = await jetli.get(WorkflowDependency.ProcessorService);
        this.workflowDataService = await jetli.get(WorkflowDependency.WorkflowDataService);
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
}

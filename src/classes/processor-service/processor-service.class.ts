import {jetli} from 'jetli';
import {WorkflowDependency, WorkflowStatus} from '../../enums';
import {IProcessor, IProcessorRepository, IProcessorService, IProcessorServiceConfig} from '../../interfaces';
import {LogService} from '../log-service';

/**
 * Main class for workflow controller
 */
export class ProcessorService implements IProcessorService {
    public initialised = false;
    protected logService: LogService;
    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'Processor service';
    protected repository: IProcessorRepository;

    constructor(config?: IProcessorServiceConfig) {
        this.applyConfig(config);
    }

    public async init(): Promise<void> {
        await this.setDependencies();
        await this.repository.init();
        this.initialised = true;

        await this.logService.log('Initialised', {name: this.name, scope: this});
    }

    public get(processorId: string): Promise<IProcessor> {
        return Promise.resolve({
            id: 'some-name',
            callback: () => {
                return Promise.resolve(WorkflowStatus.READY);
            }
        });
    }

    public exists(processor: string): Promise<boolean> {
        // TODO: implement
        return Promise.resolve(false);
    }

    public set(processor: IProcessor): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public update(processor: IProcessor): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    protected async setDependencies() {
        this.logService = await jetli.get(WorkflowDependency.LogService);
    }

    protected applyConfig(config?: IProcessorServiceConfig) {
        if (config) {
            Object.assign(this, config);
        }
    }
}

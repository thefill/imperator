import {WorkflowStatus} from '../../enums';
import {IProcessor, IProcessorRepository, IProcessorService, IProcessorServiceConfig} from '../../interfaces';

/**
 * Main class for workflow controller
 */
export class ProcessorService implements IProcessorService {
    protected repository: IProcessorRepository;

    constructor(config: IProcessorServiceConfig) {
        this.applyConfig(config);

        // if no data repository provided fallback to default one
        if (!this.repository) {
            // TODO: create fallback to default data repository
        }
    }

    public async init(): Promise<void> {
        await this.repository.init();
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

    protected applyConfig(config: IProcessorServiceConfig) {
        Object.apply(this, config);

        // if no repository provided fallback to default one
        if (!this.repository) {
            // TODO: create fallback to default data repository
        }
    }
}

import {WorkflowStatus} from '../../enums';
import {IProcessor, IProcessorRepository, IProcessorService, IProcessorServiceConfig} from '../../interfaces';
import {Instance} from '../instance';

/**
 * Main class for workflow controller
 */
export class ProcessorService extends Instance<IProcessorServiceConfig> implements IProcessorService {
    public name = 'Processor service';
    protected repository: IProcessorRepository;

    public async init(): Promise<void> {
        await this.repository.init();
        await super.init();
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

    public unset(processorId: string): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public update(processor: IProcessor): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }
}

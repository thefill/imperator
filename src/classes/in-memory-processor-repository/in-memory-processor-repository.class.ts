import {Jetli} from 'jetli';
import {WorkflowDependency, WorkflowStatus} from '../../enums';
import {IProcessor, IProcessorRepository} from '../../interfaces';
import {LogService} from '../log-service';

/**
 * Main class for in-memory processor repository
 */
export class InMemoryProcessorRepository implements IProcessorRepository {
    public initialised = false;
    protected logService: LogService;

    /**
     * Name of the module - used e.g. for logging purposes
     * @type {string}
     */
    protected name = 'In-memory processor repository';

    public async init(jetli: Jetli): Promise<void> {
        this.logService = await jetli.get(WorkflowDependency.LogService);

        this.initialised = true;
        await this.logService.log('Initialised', {name: this.name, scope: this});
    }

    public get(processorId: string): Promise<IProcessor> {
        // TODO: implement
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
}

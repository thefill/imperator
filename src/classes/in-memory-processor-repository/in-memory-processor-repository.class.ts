import {WorkflowStatus} from '../../enums';
import {IProcessor, IProcessorRepository} from '../../interfaces';
import {Instance} from '../instance';

/**
 * Main class for in-memory processor repository
 */
export class InMemoryProcessorRepository extends Instance implements IProcessorRepository {
    public name = 'In-memory processor repository';

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

    public unset(processorId: string): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }

    public update(processor: IProcessor): Promise<void> {
        // TODO: implement
        return Promise.resolve();
    }
}

import {jetli} from 'jetli';
import {WorkflowDependency} from '../../enums/workflow-dependency';
import {IInstance} from '../../interfaces/instance';
import {ILogService} from '../../interfaces/log-service';

/**
 * Basic instance interface
 */
export abstract class Instance<Config = { [key: string]: any }> implements IInstance {
    public initialised: boolean = false;
    public abstract name: string;
    protected logService: ILogService;

    constructor(config?: Config) {
        this.applyConfig(config);
    }

    public async init(): Promise<void> {
        await this.setDependencies();
        this.initialised = true;

        await this.logService.log('Initialised', {name: this.name, scope: this});
    }

    public applyConfig(config?: Config) {
        if (config) {
            Object.assign(this, config);
        }
    }

    protected async setDependencies() {
        this.logService = await jetli.get(WorkflowDependency.LogService);
    }
}

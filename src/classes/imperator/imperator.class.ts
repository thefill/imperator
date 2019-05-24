import {ActionType} from '../../enums';
import {IImperator, IImperatorConfig, IProcessorConfig, IWorkflowConfig} from '../../interfaces';

/**
 * Main class for dependency injector.
 */
export class Imperator implements IImperator {
    protected dataRepository;

    constructor(config: IImperatorConfig){
        this.applyConfig(config);
    }

    protected applyConfig(config: IImperatorConfig){
        Object.apply(this, config);
    }

    public setProcessor(id: string, config: IProcessorConfig): void{
    }

    public unsetProcessor(id: string): void{
    }

    public setWorkflow(config: IWorkflowConfig): void{
    }

    public unsetWorkflow(id: string): void{
    }

    public evaluateWorkflow(id: string): void{
    }

    // trigger
    public triggerAction(
        type: ActionType,
        path: string | string[],
        params?: any,
        force?: boolean
    ){
    }
}

import {ActionType} from '../../enums';
import {IWorkflowController, IWorkflowControllerConfig} from '../../interfaces/workflow-controller';
import {IWorkflowConfig} from '../../interfaces/workflow';
import {IProcessor} from '../../interfaces/processor';

/**
 * Main class for dependency injector.
 */
export class Imperator implements IWorkflowController {
    protected dataRepository;

    constructor(config: IWorkflowControllerConfig) {
        this.applyConfig(config);
    }

    public setProcessor(config: IProcessor): void {
    }

    public unsetProcessor(id: string): void {
    }

    public setWorkflow(config: IWorkflowConfig): void {
    }

    public unsetWorkflow(id: string): void {
    }

    public evaluateWorkflow(id: string): void {
    }

    // trigger
    public triggerAction(
        type: ActionType,
        path: string | string[],
        params?: any,
        force?: boolean
    ) {
    }

    public getWorkflowStatus(id: string) {

    }

    protected applyConfig(config: IImperatorConfig) {
        Object.apply(this, config);
    }
}

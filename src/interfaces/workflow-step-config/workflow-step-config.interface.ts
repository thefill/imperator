import {IProcessor} from '../processor';

export interface IStepConfig {
    // how we should evaluate the step - if none provided we trigger onSuccess as soon as we hit this tep
    processor?: string | IProcessor;
}

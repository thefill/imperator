import {IWorkflowStepConfig} from './workflow-step-config.interface';

/**
 * Workflow step definition
 */
export interface IWorkflowStep extends IWorkflowStepConfig {
    // timestamp when processor executed
    processedDate?: number;
    // no of times processor has been evaluated (useful e.g. when retry have limit)
    processedCount?: number;
    // index of current processor
    activeProcessorIndex?: number;
}

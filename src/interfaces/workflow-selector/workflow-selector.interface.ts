/**
 * Definition for workflow route.
 * Selector helps to select the workflow / phase / path / step.
 * Possible values:
 * - [workflowId]
 * - [workflowId, phaseId]
 * - [workflowId, phaseId, pathId]
 * - [workflowId, phaseId, pathId, stepId]
 */
export interface IWorkflowSplittedSelector extends Array<string> {
    [node: number]: string;
}

/**
 * Definition for workflow route.
 * Selector helps to select the workflow / phase / path / step.
 * Possible values:
 * - array of ids
 * - string path in the following format:
 *     - workflowId
 *     - workflowId/phaseId
 *     - workflowId/phaseId/pathId
 *     - workflowId/phaseId/pathId/stepId
 */
export type IWorkflowSelector = string | IWorkflowSplittedSelector;

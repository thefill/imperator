/**
 * Context definition for log repository
 */
export interface IWorkflowLogRepositoryContext {
    // Scope where event occurred
    scope: any;
    // Path route to the location in the workflow that caused event
    path?: string[];
}

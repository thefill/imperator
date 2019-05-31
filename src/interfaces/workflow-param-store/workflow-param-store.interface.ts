/**
 * Definition for the param store used to persist params across steps
 */
export interface IWorkflowParamStore {
    // Param should contain any data that can be serialised
    // for e.g. persisting it in the document store
    [key: string]: any;
}

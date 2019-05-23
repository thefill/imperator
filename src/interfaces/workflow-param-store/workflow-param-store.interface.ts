export interface IWorkflowParamStore {
    [key: string]: string | number | IWorkflowParamStore | IWorkflowParamStore[];
}

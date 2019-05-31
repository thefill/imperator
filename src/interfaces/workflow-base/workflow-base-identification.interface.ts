/**
 * Workflow configuration base identification
 */
export interface IWorkflowBaseIdentification {
    // unique id among node siblings
    id: string | number;
    // display name, fallback to id
    name?: string;
    // optional tags that works as a selectors - helps in generation of diagram e.g. for UI
    tags?: string[];
}

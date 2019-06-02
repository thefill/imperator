/**
 * Context definition for log repository
 */
export interface ILogRepositoryContext {
    // module name
    name: string;
    // Scope where event occurred
    scope: any;
    // additional data
    data?: { [key: string]: any };
}

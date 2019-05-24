export interface IWorkflowLogRepository {
    log(path: string[], message: any): Promise<void>

    warn(path: string[], message: any): Promise<void>

    error(path: string[], message: any): Promise<void>

    info(path: string[], message: any): Promise<void>
}

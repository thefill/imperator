import {IWorkflowSnapshotBase} from '../workflow-snapshot-base';

/**
 * Workflow path snapshot
 */
export interface IWorkflowPathSnapshot extends IWorkflowSnapshotBase {
    // step snapshots
    steps: IWorkflowSnapshotBase[];
}

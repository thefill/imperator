import {IWorkflowSnapshotBase} from '../workflow-snapshot-base';
import {IWorkflowPathSnapshot} from './workflow-path-snapshot.interface';

/**
 * Workflow phase snapshot
 */
export interface IWorkflowPhaseSnapshot extends IWorkflowSnapshotBase {
    // path snapshots
    paths: IWorkflowPathSnapshot[];
}

import {IWorkflowSnapshotBase} from '../workflow-snapshot-base';
import {IWorkflowPhaseSnapshot} from './workflow-phase-snapshot.interface';

/**
 * Workflow snapshot
 */
export interface IWorkflowSnapshot extends IWorkflowSnapshotBase {
    // phase snapshots
    phases: IWorkflowPhaseSnapshot[];
}

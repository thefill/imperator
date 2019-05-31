/**
 * Possible status of workflow / phase / path / step
 */
export enum WorkflowStatus {
    // dont act on node - its in the middle of processing - time after calling
    // callback and before promise is resolved
    'PROCESSING' = -2,
    // state that indicates we are expecting external trigger
    'AWAITING' = -1,
    // ready to be processed
    'READY' = 0,
    // processed successfully
    'SUCCEDED' = 1,
    // failed while processing
    'FAILED' = 2,
    // skipped, wont be processed until reset
    'SKIPPED' = 3
}

import {ActionType, WorkflowStatus} from './enums';
import {IWorkflowConfig} from './interfaces';

// Path passed as an id:
const test: IWorkflowConfig = {
    id: 'workflow-1',
    name: 'Workflow 1',
    status: WorkflowStatus.READY,
    phases: [
        {
            id: 'phase-a',
            name: 'Phase A',
            status: WorkflowStatus.READY,
            paths: [
                {
                    id: 'default-path',
                    name: 'Default path',
                    status: WorkflowStatus.READY,
                    steps: [
                        {
                            id: 'step-a-1',
                            name: 'Step A-1',
                            status: WorkflowStatus.READY,
                            processor: 'callback-a-1',
                            onSuccess: [
                                ActionType.NEXT
                            ],
                            onFailure: [
                                {
                                    type: ActionType.JUMP,
                                    params: ['phase-a', 'default-path', 'step-a-3']
                                }
                            ]
                        },
                        {
                            id: 'step-a-2',
                            name: 'Step A-2',
                            status: WorkflowStatus.READY,
                            processor: 'callback-a-2',
                            onSuccess: [
                                ActionType.NEXT
                            ],
                            onFailure: [
                                {
                                    type: ActionType.JUMP,
                                    params: ['phase-a', 'default-path', 'step-a-3']
                                }
                            ]
                        },
                        {
                            id: 'step-a-3',
                            name: 'Step A-3',
                            status: WorkflowStatus.READY,
                            processor: 'callback-a-3',
                            onSuccess: [
                                ActionType.NEXT
                            ],
                            onFailure: [
                                ActionType.CLOSE
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

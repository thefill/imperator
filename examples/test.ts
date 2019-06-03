// const InMemoryLogRepository = require("./dist/cjs").InMemoryLogRepository;
//
// const LogService = require("./dist/cjs").LogService;
//
// const logServiceConfig = {
//     repository: new InMemoryLogRepository(),
// };
//
// const svc = new LogService(logServiceConfig);
// init();
//
// async function init() {
//     await svc.init();
// }
//
// import {WorkflowController} from './src';

import {WorkflowController} from "../src";

init();

async function init(){
    const ctrl = new WorkflowController();
    await ctrl.init();
    console.log(123);
}

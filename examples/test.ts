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

import {InMemoryLogRepository, LogService} from "../src";

init();

async function init(){
    const logServiceConfig = {
        repository: new InMemoryLogRepository()
    };
    const svc = new LogService(logServiceConfig);
    await svc.init();
    console.log(123);
}

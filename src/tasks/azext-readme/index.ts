import tl = require("azure-pipelines-task-lib/task");
import ReadmeTaskService from "./readme-task-service";

async function run(): Promise<void> {
  try {
    const service = new ReadmeTaskService();
    await service.process();
  } catch (err: any) {
    tl.setResult(tl.TaskResult.Failed, err?.message);
  }
}

run();

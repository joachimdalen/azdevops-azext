import tl = require("azure-pipelines-task-lib/task");
import ChangelogTaskService from "./changelog-task-service";

async function run(): Promise<void> {
  try {
    const service = new ChangelogTaskService();
    const result = await service.generate();
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();

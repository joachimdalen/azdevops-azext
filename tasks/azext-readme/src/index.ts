import tl = require("azure-pipelines-task-lib/task");
import ReadmeTaskService from "./readme-task-service";
import { TaskOptions } from "./task-options";

enum ReadmeCommand {
  Generate = "generate",
}

async function run(): Promise<void> {
  try {
    const command: ReadmeCommand = tl.getInput(
      TaskOptions.Command,
      true
    ) as ReadmeCommand;
    const service = new ReadmeTaskService();

    switch (command) {
      case ReadmeCommand.Generate: {
        await service.generate();
      }
    }
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();

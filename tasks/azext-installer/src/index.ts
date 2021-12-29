import tl = require("azure-pipelines-task-lib/task");
import ChangelogTaskService from "./changelog-task-service";
import { TaskOptions } from "./task-options";

enum ChangelogCommand {
  Generate = "generate",
}

async function run(): Promise<void> {
  try {
    const command: ChangelogCommand = tl.getInput(
      TaskOptions.Command,
      true
    ) as ChangelogCommand;
    const service = new ChangelogTaskService();

    switch (command) {
      case ChangelogCommand.Generate: {
        await service.generate();
      }
    }
  } catch (err) {
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();

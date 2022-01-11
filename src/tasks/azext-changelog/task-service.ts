import { GenerateChangelogOptions } from "@joachimdalen/azext/dist/modules/changelog/options";
import { TaskOptions } from "./task-options";
import tl = require("azure-pipelines-task-lib/task");
import { getInputOrThrow } from "../../utils/getInputOrThrow";

export const getTaskInputs = (): GenerateChangelogOptions => {
  const options: GenerateChangelogOptions = {
    output: getInputOrThrow(TaskOptions.Output, true),
    configName: getInputOrThrow(TaskOptions.ConfigName, true),
    logName: getInputOrThrow(TaskOptions.LogName, true),
    format: tl.getBoolInput(TaskOptions.Format),
    generateCache: tl.getBoolInput(TaskOptions.GenerateCache),
    fromCache: tl.getBoolInput(TaskOptions.FromCache),
    cacheName: getInputOrThrow(TaskOptions.CacheName),
    version: tl.getInput(TaskOptions.Version),
  };

  return options;
};

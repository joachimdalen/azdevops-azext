import { GenerateChangelogOptions } from "@joachimdalen/azext/dist/modules/changelog/options";
import ChangelogService from "@joachimdalen/azext/dist/modules/changelog/changelog-service";
import tl = require("azure-pipelines-task-lib/task");
import { TaskOptions } from "./task-options";
import { GeneratorResult } from "@joachimdalen/azext/dist/modules/changelog/generator";

export default class ChangelogTaskService {
  private readonly _changelogService: ChangelogService;
  constructor() {
    this._changelogService = new ChangelogService();
  }
  public async generate(): Promise<GeneratorResult> {
    const options: GenerateChangelogOptions = {
      output: tl.getInput(TaskOptions.Output),
      configName: tl.getInput(TaskOptions.ConfigName),
      logName: tl.getInput(TaskOptions.LogName),
      format: tl.getBoolInput(TaskOptions.Format),
      generateCache: tl.getBoolInput(TaskOptions.GenerateCache),
      fromCache: tl.getBoolInput(TaskOptions.FromCache),
      cacheName: tl.getInput(TaskOptions.CacheName),
      version: tl.getInput(TaskOptions.Version),
    };
    const result = await this._changelogService.generate(options);
    return result;
  }
}

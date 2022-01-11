import { GenerateChangelogOptions } from "@joachimdalen/azext/dist/modules/changelog/options";
import ChangelogService from "@joachimdalen/azext/dist/modules/changelog/changelog-service";
import { GeneratorResult } from "@joachimdalen/azext/dist/modules/changelog/generator";
import { getTaskInputs } from "./task-service";
import tl = require("azure-pipelines-task-lib/task");

export default class ChangelogTaskService {
  private readonly _changelogService: ChangelogService;
  constructor() {
    this._changelogService = new ChangelogService();
  }
  public async generate(): Promise<GeneratorResult> {
    const options: GenerateChangelogOptions = getTaskInputs();
    const result = await this._changelogService.generate(options);
    return result;
  }
}

import { ReadmeOptions } from "@joachimdalen/azext/dist/modules/readme/options";
import ReadmeService from "@joachimdalen/azext/dist/modules/readme/readme-service";
import tl = require("azure-pipelines-task-lib/task");
import { getInputOrThrow } from "../../utils/getInputOrThrow";
import { TaskOptions } from "./task-options";

export default class ReadmeTaskService {
  private _service: ReadmeService;
  constructor() {
    this._service = new ReadmeService();
  }
  public async process(): Promise<any> {
    const options: ReadmeOptions = {
      output: getInputOrThrow(TaskOptions.Output, true),
      input: getInputOrThrow(TaskOptions.Input, true),
    };

    const processedInput = await this._service.processReadMe(options.input);

    tl.writeFile(options.output, processedInput);
    console.log(`Wrote processed readme file to ${options.output}`);
  }
}

import { ReadmeOptions } from "@joachimdalen/azext/dist/modules/readme/options";
import ReadmeService from "@joachimdalen/azext/dist/modules/readme/readme-service";
import tl = require("azure-pipelines-task-lib/task");
import { TaskOptions } from "./task-options";

export default class ReadmeTaskService {
  private _service: ReadmeService;
  constructor() {
    this._service = new ReadmeService();
  }
  public async generate(): Promise<any> {
    const options: ReadmeOptions = {
      output: tl.getInput(TaskOptions.Output),
      input: tl.getInput(TaskOptions.Input),
    };

    const processedInput = await this._service.processReadMe(options.input);

    tl.writeFile(options.output, processedInput);
  }
}

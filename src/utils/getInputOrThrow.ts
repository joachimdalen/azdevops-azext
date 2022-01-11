import tl = require("azure-pipelines-task-lib/task");
export const getInputOrThrow = (name: string, isRequired?: boolean): string => {
  const input = tl.getInput(name, isRequired);

  if (input === undefined) {
    throw new Error(`Missing required input: ${name}`);
  }

  return input;
};

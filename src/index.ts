// @ts-check

simport { join } from "path";
import { logger } from "./logger";

import { Command } from "commander";

async function main() {
  try {
    // For CI, we rely on another mechanism to authenticate
    if (process.env.CI || process.env.TF_BUILD) {
      return;
    }

    const program = new Command();
    await program
      .option("-o, --organization <organization>", "The Azure DevOps organization")
      .option("-p, --project <project>", "The Azure DevOps project")
      .option("-f, --feed <feed>", "The Azure DevOps Artifacts Feed")
      .option("-c, --config <config>", "The path to the project .yarnrc.yml file", join(process.cwd(), ".yarnrc.yml"))
      .action(action)
      .parseAsync(process.argv);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  logger.info("You are now ready to run `yarn` to install packages.");
}





main();

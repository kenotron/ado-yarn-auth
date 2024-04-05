import { join } from "path";
import { homedir } from "os";
import { logger } from "./logger";
import { ensureAuthFile } from "./ensure-auth-file";
import { parseYarnrc } from "./parse-yarnrc";

interface ActionOptions {
  project: string;
  organization: string;
  feed: string;
  configFile: string;
}

async function action({
  configFile,
  project,
  organization,
  feed,
}: ActionOptions) {
  const userAuthFile = join(homedir(), ".yarnrc.yml");

  logger.info("Ensuring that the user auth file exists: %s", userAuthFile);
  await ensureAuthFile(userAuthFile);

  const userYarnrc = parseYarnrc(userAuthFile);
  const projectYarnrc = parseYarnrc(configFile);

  const authRequired = await isAuthRequired(userYarnrc, projectYarnrc);

  if (authRequired) {
    logger.info("A new auth token is required");

    const npmAuthIdent = await getBase64AuthIdent({
      organization,
      displayName: project,
    });

    let userNpmRegistries: Record<
      string,
      { npmAuthIdent: string; npmAlwaysAuth: boolean }
    > = authObject.npmRegistries ?? {};

    for (const [url, userNpmRegistry] of Object.entries(npmRegistries)) {
      if (!userNpmRegistry.npmAuthIdent) {
      }
    }

    // Object.assign(authObject, {
    //   npmRegistries: {
    //     [teamsNpmRegistry]: {
    //       npmAuthIdent,
    //       npmAlwaysAuth: true,
    //     },
    //   },
    // });

    // logger.info("Auth token has been written to: %s", userAuthFile);
    // await fsPromises.writeFile(userAuthFile, yaml.dump(authObject));
  }
}

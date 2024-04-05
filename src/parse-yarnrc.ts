import fs from "fs";
import yaml from "yaml";
import { logger } from "./logger";

export function parseYarnrc(file: string): Yarnrc {
  try {
    const contents = fs.readFileSync(file, "utf8");
    return yaml.parse(contents);
  } catch (error) {
    logger.error("Failed to parse the .yarnrc.yml file: %s", error);
    return {};
  }
}

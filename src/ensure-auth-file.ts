import fs from "fs";
import { logger } from "./logger";

export function ensureAuthFile(userAuthFile: string) {
  const userAuthFileExists = fs.existsSync(userAuthFile);
  if (!userAuthFileExists) {
    logger.info("User auth file not found, creating one");
    fs.writeFileSync(userAuthFile, "");
  }
}

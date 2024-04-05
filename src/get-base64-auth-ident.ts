import { execa } from "execa";

interface GetBase64AuthIdentOptions {
  organization: string;
  displayName: string;
  promptHint?: string;
  scope?: string;
}

export async function getBase64AuthIdent({
  organization,
  displayName,
  promptHint,
  scope,
}: GetBase64AuthIdentOptions) {
  const results = await execa("npm", [
    "exec",
    "azureauth",
    "--yes",
    "--",
    "ado",
    "pat",
    "--organization",
    organization,
    "--display-name",
    displayName,
    "--prompt-hint",
    promptHint ?? "Auth is required",
    "--scope",
    scope ?? "vso.packaging_write",
    "--output",
    "token",
  ]);

  return Buffer.from(
    `user:${Buffer.from(results.stdout).toString("utf-8")}`
  ).toString("base64");
}

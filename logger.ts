import { logFilename } from "./config.ts";

async function log(level: "info" | "error", message: string): Promise<void> {
  const data = JSON.stringify({ date: new Date(), level, message }) + "\n";
  await Deno.writeTextFile(logFilename, data, { append: true, create: true });
}

export function info(message: string): Promise<void> {
  return log("info", message);
}

export function error(message: string): Promise<void> {
  return log("error", message);
}

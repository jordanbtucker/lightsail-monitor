import "npm:dotenv@^16.3.1/config";

export const url = requireEnv("MONITOR_URL");
export const region = requireEnv("AWS_REGION");
export const instanceName = requireEnv("AWS_INSTANCE_NAME");
export const accessKeyId = requireEnv("AWS_KEY_ID");
export const secretAccessKey = requireEnv("AWS_KEY_SECRET");
export const logFilename = requireEnv("LOG_FILENAME");

function requireEnv(name: string): string {
  const value = Deno.env.get(name);
  if (value == null || value === "") {
    throw new Error(`${name} is required`);
  }

  return value;
}

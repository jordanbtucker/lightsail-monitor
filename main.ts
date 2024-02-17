import {
  LightsailClient,
  RebootInstanceCommand,
} from "npm:@aws-sdk/client-lightsail@^3.515.0";
import {
  accessKeyId,
  instanceName,
  region,
  secretAccessKey,
  url,
} from "./config.ts";
import { error, info } from "./logger.ts";

try {
  const response = await fetch(url);
  if (!response.ok) {
    error("Offline");
    const client = new LightsailClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
    const command = new RebootInstanceCommand({ instanceName });
    const output = await client.send(command);
    if (output.$metadata.httpStatusCode === 200) {
      info("Rebooting");
    } else {
      error("Failed to reboot instance");
    }
  } else {
    info("Online");
  }
} catch (err) {
  if (err instanceof Error) {
    error(err.message);
  } else {
    error(String(err));
  }
}

// I added this here for testing only. I tried using this in a custom Nitro preset.
// The import works but the types are not resolved.
import { runCronTasks } from "nitropack/runtime/task";

export default eventHandler((event) => {
  const _ = runCronTasks;

  return "Check <code>server/routes/index.ts</code>.";
});

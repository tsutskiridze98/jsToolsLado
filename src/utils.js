import * as Logger from "./logger";

export function currentDate() {
  Logger.log(`Current date is ${new Date()}`);
}

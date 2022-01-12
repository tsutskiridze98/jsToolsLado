import * as Logger from "./logger";
import * as Utils from "./utils";
import { isFriday, isMonday, isWednesday } from "date-fns";

Logger.log("my message");
Utils.currentDate();

console.log("is friday? - ", isFriday(new Date()));
console.log("is monday? - ", isMonday(new Date()));
console.log("is Wednesday? - ", isWednesday(new Date()));

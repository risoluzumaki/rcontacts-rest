import { pino } from "pino";

const isDev = process.argv.includes("--dev");

export const appLog = pino({
  level: isDev ? "debug" : "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
})
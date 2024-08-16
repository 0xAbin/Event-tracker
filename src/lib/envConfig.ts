import 'dotenv/config'

export const DEVenv = process.env.DEV as "production" | "test" || "test";



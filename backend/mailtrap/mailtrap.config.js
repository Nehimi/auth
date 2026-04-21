import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();
const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;
export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  endpoint: ENDPOINT,

});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "LiddoNotes",
};
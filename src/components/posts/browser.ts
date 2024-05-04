// import { setupWorker } from 'msw';
import { setupWorker } from "msw/browser";

import { handlers } from "./db";

export const worker = setupWorker(...handlers);

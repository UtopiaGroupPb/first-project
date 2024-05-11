import { Hono } from "hono";
import { Router } from "./routes/routes";

const server = new Hono();

server.route('/', Router);

export default {
    port: Bun.env.PORT,
    hostname: Bun.env.HOST,
    fetch: server.fetch
}
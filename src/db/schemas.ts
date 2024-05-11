import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const findPerson = zValidator ('param', z.object({
    id: z.string().uuid()
}));

export const createPerson = zValidator ('json', z.object({
    nome: z.string().max(32),
    apelidos: z.string().max(255).array()
}));

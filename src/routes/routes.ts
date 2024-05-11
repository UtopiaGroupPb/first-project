import { Hono } from "hono";
import { addPerson, getPerson, type Person } from "../db/db";
import { createPerson, findPerson } from "../db/schemas";

 export const Router = new Hono().basePath('/');

Router.get('/person/:id', findPerson, async (c) => {
    const { id } = c.req.valid('param');

    const person = await getPerson(id);

    if (person) {
        return c.json({
            ...person
        }, 200);
    }

    return c.json({}, 404);
});

Router.post('/person', createPerson, async (c) => {
    const body = c.req.valid('json');

    const personId = crypto.randomUUID();

    const person: Person = {
        id: personId,
        nome: body.nome,
        apelidos: body.apelidos
    }

    await addPerson(person);

    return c.json({
        ...person
    }, 201);
});
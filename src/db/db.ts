import { Pool } from 'pg';

const pool = new Pool({
    host: Bun.env.HOST_DB,
    user: Bun.env.USER_DB,
    password: Bun.env.PASSW_DB,
    database: Bun.env.DB,
    min: 50,
    max: 250,
    idleTimeoutMillis: 0,
    connectionTimeoutMillis: 10000,
});

export type Person = {
    id: string,
    nome: string,
    apelidos: string[],
}

export const addPerson = async (person: Person) => {
    const client = await pool.connect();

    await client.query(`INSERT INTO person (id, nome, apelidos) VALUES ($1, $2, $3)`, [person.id, person.nome, person.apelidos]);

    client.release();
}

export const getPerson = async (id: string) => {
    const client = await pool.connect();

    const result = await client.query(`SELECT * from person WHERE id = $1 LIMIT 1`, [id])

    client.release();

    return result?.rows?.[0] ?? null;
}
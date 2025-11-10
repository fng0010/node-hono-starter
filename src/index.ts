import { serve } from "@hono/node-server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Hono } from "hono";

const _db = drizzle({
    connection: {
        connectionString: process.env.DATABASE_URL,
    },
});

const app = new Hono();

app.get("/", (c) => {
    return c.text("Hello Hono!");
});

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    },
);

import "dotenv/config";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { usersTable } from "./schema.js";

async function main() {
    console.log("Initializing script...");

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();
        const db = drizzle(client);

        const user: typeof usersTable.$inferInsert = {
            name: "John",
            email: "john@example.com",
        };

        await db.delete(usersTable).where(eq(usersTable.email, user.email));
        console.log("Previous user deleted.");

        await db.insert(usersTable).values(user);
        console.log("New user created.");

        const users = await db.select().from(usersTable);
        console.log("Users in the db:", users);

        await db
            .update(usersTable)
            .set({ email: "abcd@email.com" })
            .where(eq(usersTable.email, user.email));

        await db
            .delete(usersTable)
            .where(eq(usersTable.email, "abcd@email.com"));
        console.log("User deleted.");
    } catch (error) {
        console.error("Error during seeding:", error);
    } finally {
        await client.end();
        console.log("Seed script finished. Conexion closed.");
    }
}

main();

import { type DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import Layout from "./Layout";
import * as schema from "./schema";
import { relations } from "./schema/relations";

interface Env {
	DB: D1Database;
}

const app = new Hono<{
	Bindings: {
		db: DrizzleD1Database<typeof schema, typeof relations>;
	};
}>();

app.get("/", async (c) => {
	const members = await c.env.db.$count(schema.members);
	return c.html(
		<Layout>
			<h1 class="text-2xl">Hello world!</h1>
			<p class="text-lg">Members: {members}</p>
		</Layout>,
	);
});

export default {
	fetch(req, env, ctx) {
		const db = drizzle(env.DB, {
			schema,
			relations,
			casing: "snake_case",
		});
		return app.fetch(req, { db }, ctx);
	},
} satisfies ExportedHandler<Env>;

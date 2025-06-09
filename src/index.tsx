import { type DrizzleD1Database, drizzle } from "drizzle-orm/d1";
import { H3, type H3Event, serve } from "h3";
import { Layout } from "~/components/Layout";
import { Members } from "~/components/Members";
import { registerFetchers } from "~/fetchers";
import * as schema from "~/schema";
import { relations } from "~/schema/relations";

export type DB = DrizzleD1Database<typeof schema, typeof relations>;
// biome-ignore lint/complexity/noBannedTypes: this is what FC expects
export type Component<Signals = {}, AppSignals = {}> = FC<
	Signals,
	AppSignals,
	{ event: H3Event }
>;

interface Env {
	DB: D1Database;
}

declare module "h3" {
	interface H3EventContext {
		db: DB;
	}
}

const app = new H3();

app.use((event) => {
	const env = event.runtime?.cloudflare?.env as Env;
	event.context.db = drizzle(env.DB, {
		schema,
		relations,
		casing: "snake_case",
	});
});

registerFetchers(app);

app.get("/", async (event) => (
	<html lang="ko" htmx context={{ event }}>
		<Layout>
			<h1 class="text-2xl">Hello world!</h1>
			<Members />
		</Layout>
	</html>
));

export default {
	fetch: serve(app).fetch,
} satisfies ExportedHandler<Env>;

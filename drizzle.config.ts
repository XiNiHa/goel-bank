import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	schema: "./src/schema",
	casing: "snake_case",
	driver: "d1-http",
	dbCredentials: {
		accountId: process.env.D1_ACCOUNT_ID ?? "",
		databaseId: process.env.D1_DATABASE_ID ?? "",
		token: process.env.D1_MIGRATION_TOKEN ?? "",
	},
});

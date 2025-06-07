import * as db from "drizzle-orm/sqlite-core";
import { Temporal } from "temporal-polyfill";
import * as uuid from "uuid";

export const members = db.sqliteTable("members", {
	id: db
		.text()
		.primaryKey()
		.$defaultFn(() => uuid.v7()),
	name: db.text().notNull(),
	createdAt: db
		.text()
		.notNull()
		.$defaultFn(() => Temporal.Now.zonedDateTimeISO().toString()),
	updatedAt: db
		.text()
		.notNull()
		.$onUpdateFn(() => Temporal.Now.zonedDateTimeISO().toString()),
});

import { defineRelations } from "drizzle-orm";
import * as schema from ".";

export const relations = defineRelations(schema);

import * as schema from "../schema";
import { makeFetcher } from "../utils/h3";

export const membersFetcher = makeFetcher(async (event) => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return event.context.db.$count(schema.members);
});

import type { H3 } from "h3";
import * as membersFetchers from "./members";

export const registerFetchers = (app: H3) => {
	for (const fetcher of [...Object.values(membersFetchers)]) {
		app.get(fetcher.path, fetcher);
	}
};

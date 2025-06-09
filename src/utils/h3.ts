import type { EventHandlerResponse, H3Event } from "h3";

export const makeFetcher = <T extends EventHandlerResponse>(
	fn: (event: H3Event) => T,
) => {
	const fetcher = fn as typeof fn & { path: string };
	fetcher.path = `/fetcher/${crypto.randomUUID()}`;
	return fetcher;
};

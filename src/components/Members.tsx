import type { Component } from "~/.";
import { membersFetcher } from "~/fetchers/members";

export async function Members(this: Component) {
	const members = await membersFetcher(this.context.event);

	return (
		<p class="text-lg">
			Members:{" "}
			<span
				hx-get={membersFetcher.path}
				hx-trigger="every 3s"
				class="[&.htmx-request]:opacity-50 transition-opacity duration-500"
			>
				{members}
			</span>
		</p>
	);
}

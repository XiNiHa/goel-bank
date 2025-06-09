import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-plugin-tsconfig-paths";

export default defineConfig({
	plugins: [
		tsConfigPaths(),
		cloudflare({
			viteEnvironment: { name: "ssr" },
		}),
		tailwindcss(),
	],
	css: {
		transformer: "lightningcss",
	},
});

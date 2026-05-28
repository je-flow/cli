// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
	build: {
		ssr: true,
		lib: {
			entry: resolve(import.meta.dirname, "src/index.ts"),
			name: "cli",
			formats: ["es"],
		},
		rolldownOptions: {
			output: {
				banner: "#!/usr/bin/env node\n",
				entryFileNames: "cli.js",
				codeSplitting: false,
				minify: {
					compress: true,
					mangle: true,
				},
			},
		},
		minify: true,
	},
	define: {
		"process.env.RUST_MODULES_LOCATION": JSON.stringify("./native"),
	},
});

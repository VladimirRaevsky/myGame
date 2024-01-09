import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		checker({
			typescript: true,
		}),
	],
	resolve: {
		alias: {
            "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src")
        }
	},
});

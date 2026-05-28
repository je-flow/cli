import { resolve } from "node:path";
import main from "./runtime";
import logErr from "./ui/error";

const envPath = resolve(import.meta.dirname, "..", ".env.local");

try {
	process.loadEnvFile(envPath);
} catch (err) {
	const code = (err as NodeJS.ErrnoException).code;
	if (code !== "ENOENT") {
		throw err;
	}
}

main(process.argv.slice(2)).catch((err) => {
	logErr(err);
	process.exit(1);
});

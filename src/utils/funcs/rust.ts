import { execFile } from "node:child_process";
import path from "node:path";
import { BINARY_EXT } from "../consts/arch";

export function callRustMod(name: string): Promise<string> {
	const rustModulesLocation = path.resolve(
		import.meta.dirname,
		process.env.RUST_MODULES_LOCATION!,
	);
	const binaryPath = path.join(rustModulesLocation, name + BINARY_EXT);

	return new Promise((resolve, reject) => {
		execFile(
			binaryPath,
			(err, stdo, stde) => {
				if (err) {
					const details = [err.message, stde.trim()]
						.filter(Boolean)
						.join("\n");

					reject(new Error(details));
					return;
				}

				resolve(stdo.trim());
			},
		);
	});
}

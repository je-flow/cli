import runNew from "./mods/new-proj";
import banner from "./ui/banner";
import processArgs from "./utils/funcs/args";
import { callRustMod } from "./utils/funcs/rust";

export default async function main(args: string[]) {
	const processedArgs = processArgs(args);
	console.log(banner());
	const res = await callRustMod("je-cli-rs");
	console.log(res);
	if (processedArgs.cmds[0] === "new") {
		await runNew(args);
	}
}

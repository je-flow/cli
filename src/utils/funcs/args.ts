import { ProcessedArgsType } from "../types/args";

export default function processArgs(args: string[]): ProcessedArgsType {
	const cmds = args.filter((a) => !a.startsWith("-"));
	const opts = args
		.filter((a) => !cmds.includes(a))
		.map((o) => o.replace(/^-+/, ""));

	return {
		cmds,
		opts,
	};
}

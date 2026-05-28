import chalk from "chalk";

export default function logErr(...msgs: unknown[]) {
	console.error(
		chalk.redBright("\nAn error occured:\n") +
			chalk.bgRed.whiteBright(msgs.join(" ")),
	);
}

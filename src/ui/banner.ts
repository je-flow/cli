import theme from "@/utils/consts/theme";
import chalk from "chalk";

export default function banner() {
	const bannerText = "Je: the unified developer flow\n";
	const separatorText = "-".repeat(bannerText.length - 1);
	return (
		chalk.hex(theme.HEADING_COLOR).bold(bannerText) +
		chalk.hex(theme.CONTRAST_COLOR)(separatorText)
	);
}

import z from "zod";

const ProcessedItemsBaseSchema = z.string().refine((s) => !s.startsWith("-"));

export const ProcessedArgsSchema = z.object({
	cmds: z.array(ProcessedItemsBaseSchema),
	opts: z.array(ProcessedItemsBaseSchema),
});

export type ProcessedArgsType = z.infer<typeof ProcessedArgsSchema>;

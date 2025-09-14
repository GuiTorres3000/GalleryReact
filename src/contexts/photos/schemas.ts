import {z} from "zod";

export const photoFormSchema = z.object({
      title: z.string().min(1, {message: "Campo obrigatório"}).max(100),
      file: z.instanceof(FileList).refine(file => file.length > 0, {message: "Campo obrigatório"}),
      albumsIds: z.array(z.string().uuid()).optional(),
});

// Transforms the zod object into typing TS
export type PhotoFormSchema = z.infer<typeof photoFormSchema>
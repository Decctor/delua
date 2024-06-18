import { z } from "zod";

const GeneralProductSchema = z.object({
  nome: z.string({ required_error: "Nome do produto não informado." }),
});

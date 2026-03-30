import { z } from "zod";

export const furnitureTypes = ["business", "sofa", "bed", "chair", "other"] as const;

export const furnitureTypeLabels: Record<(typeof furnitureTypes)[number], string> = {
  business: "Мебель для бизнеса",
  sofa: "Диван",
  bed: "Кровать",
  chair: "Кресло",
  other: "Прочие изделия",
};

export const leadSchema = z.object({
  contact: z
    .string()
    .trim()
    .min(7, "Укажите номер телефона")
    .max(20, "Некорректный номер"),

  consent: z
    .boolean()
    .refine((value) => value === true, { message: "Необходимо согласие на обработку данных" }),

  honeypot: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

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
  name: z
    .string()
    .trim()
    .min(2, "Укажите имя")
    .max(80, "Имя слишком длинное"),
  contact: z
    .string()
    .trim()
    .min(5, "Укажите телефон или мессенджер")
    .max(120, "Слишком длинное значение"),
  furnitureType: z.enum(furnitureTypes, {
    required_error: "Выберите тип мебели",
  }),
  comment: z
    .string()
    .trim()
    .max(800, "Комментарий слишком длинный")
    .optional()
    .or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Нужно согласие на обработку данных" }),
  }),
  honeypot: z.string().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;

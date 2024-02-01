"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
export const RegisterAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFeilds = RegisterSchema.safeParse(values);
  if (!validatedFeilds.success) return { error: "Invalid fields !" };
  return { success: "Email sent !" };
};

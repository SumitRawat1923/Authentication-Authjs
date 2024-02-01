"use server";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
export const LoginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFeilds = LoginSchema.safeParse(values);
  if (!validatedFeilds.success) return { error: "Invalid fields !" };
  return { success: "Email sent !" };
};

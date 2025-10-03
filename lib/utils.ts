import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ContactSchema = z.object({
    name: z.string()
        .min(8, {
            message: "Name must contain at least 8 character(s)"
        }).max(40, {
            message: "Name must contain only 40 character(s)"
        }),
    email: z.string()
        .min(8, {
            message: "Email must contain at least 8 character(s)"
        }).max(40, {
            message: "Email must contain only 40 character(s)"
        }).email("Invalid Email")
    ,
    message: z.string()
        .min(8, {
            message: "Email must contain at least 8 character(s)"
        }).max(40, {
            message: "Email must contain only 40 character(s)"
        })
    ,
})
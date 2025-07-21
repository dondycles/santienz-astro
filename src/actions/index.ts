import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";
const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const formSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty().max(100),
  subject: z.string().nonempty().max(100),
  body: z.string().nonempty(),
  recaptchaToken: z.string().nonempty(),
});
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = import.meta.env.RECAPTCHA_SECRET_KEY;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = await res.json();
  return data.success && data.score >= 0.5;
}

export const server = {
  submitEmail: defineAction({
    accept: "json",
    input: formSchema,
    handler: async (input) => {
      try {
        const isHuman = await verifyRecaptcha(input.recaptchaToken);
        if (!isHuman)
          throw new Error("reCAPTCHA verification failed. Please try again.");

        const email = await resend.emails.send({
          from: "website-inquiry@santienzphilsinc.com",
          to: "adwebsantienz@gmail.com",
          subject: input.subject,
          replyTo: input.email,
          text: input.body,
          html: `...`, // your HTML stays the same
        });

        if (email.error) {
          throw new Error(email.error.message);
        }

        return { success: true }; // ✅ required return value
      } catch (error) {
        return {
          error: {
            message:
              error instanceof Error ? error.message : "Something went wrong",
          },
        };
      }
    },
  }),
};

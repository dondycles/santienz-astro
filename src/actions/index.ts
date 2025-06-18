import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro:schema";
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  submitEmail: defineAction({
    accept: "form",
    input: z.object({
      from: z.string().email().nonempty(),
      subject: z.string(),
      html: z.string(),
    }),
    handler: async ({ from, html, subject }) => {
      const { data, error } = await resend.emails.send({
        from: "info@johnroddondoyano.com",
        to: ["dondycles@gmail.com"],
        subject,
        html,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return { from, html, subject, data };
    },
  }),
};

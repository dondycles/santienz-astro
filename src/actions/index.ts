import { ActionError, defineAction } from "astro:actions";
import { Resend } from "resend";
import { z } from "astro:schema";
import { UTApi } from "uploadthing/server";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const formSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty().max(100),
  subject: z.string().nonempty().max(100),
  body: z.string().nonempty(),
});
export const server = {
  submitEmail: defineAction({
    accept: "json",
    input: formSchema,
    handler: async (input) => {
      return await resend.emails.send({
        from: "website-inquiry@johnroddondoyano.com",
        to: "dondycles@gmail.com",
        subject: input.subject,
        replyTo: input.email,
        text: input.body,
        html: `<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div
      style="display: flex; align-items: center; background-color: #182e85; padding: 16px;"
    >
      <img
        src="https://santienz-astro.vercel.app/santienz.png"
        style="height: 32px;"
      />
      <h2 style="color: white; margin-left:16px; ">
        Santienz Phils. Inc.
      </h2>
    </div>
    <div style="padding: 0 16px;">
      <h3 style="color:#182e85; font-size: 24px; margin: 24px 0;">
        Hi, there is a new inquiry from website.
      </h3>
      <div
        style="background-color: #182e8520; border-radius: 16px; padding: 16px;"
      >
        <h4>From: ${input.name} ${input.email}</h4>
        <h4>Subject: ${input.subject}</h4>
        <br />
        <p style="white-space: pre-wrap;">${input.body}</p>
      </div>

      <br />
      <br />
      <p>Reply to: ${input.email}</p>
    </div>
  </body>
</html>`,
      });
    },
  }),
};

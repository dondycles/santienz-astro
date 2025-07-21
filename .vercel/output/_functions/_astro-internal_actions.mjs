import './chunks/_astro_actions_CYjkX7YQ.mjs';
import * as z from 'zod';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_ChZ-bCTp.mjs';

const resend = new Resend("re_MjH8BPVC_753AuTKecruWXBT5qnfEUS8b");
const formSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty().max(100),
  subject: z.string().nonempty().max(100),
  body: z.string().nonempty(),
  recaptchaToken: z.string().nonempty()
});
async function verifyRecaptcha(token) {
  const secret = "6LfXDYorAAAAAM7j8MTUiAAGih6gG0IGYwT85VMz";
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token
    })
  });
  const data = await res.json();
  return data.success && data.score >= 0.5;
}
const server = {
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
</html>`
          // your HTML stays the same
        });
        if (email.error) {
          throw new Error(email.error.message);
        }
        return { success: true };
      } catch (error) {
        return {
          error: {
            message: error instanceof Error ? error.message : "Something went wrong"
          }
        };
      }
    }
  })
};

export { server };

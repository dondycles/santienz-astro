import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "./ContactForm";

export default function RecaptchaWrapper() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LfXDYorAAAAAJYQ9xyz1hXFS-Ijvl39oqI-GScP"
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ContactForm className="flex flex-col gap-2 flex-1 mt-4 lg:mt-0 row-start-2 lg:row-start-1 col-start-1 lg:col-start-2 row-span-2" />
    </GoogleReCaptchaProvider>
  );
}

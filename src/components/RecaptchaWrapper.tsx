import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from './ContactForm';

export default function RecaptchaWrapper() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      <ContactForm className="col-start-1 row-span-2 row-start-2 mt-4 flex flex-1 flex-col gap-2 lg:col-start-2 lg:row-start-1 lg:mt-0" />
    </GoogleReCaptchaProvider>
  );
}

import { actions } from "astro:actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
export const formSchema = z.object({
  email: z.string().email().nonempty(),
  name: z.string().nonempty().max(100),
  subject: z.string().nonempty().max(100),
  body: z.string().nonempty(),
});

export default function ContactForm({ className }: { className?: string }) {
  const [hideSubjectInput, setHideSubjectInput] = useState(true);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      body: "",
      email: "",
      name: "",
      subject: "",
    },
  });
  const [token, setToken] = useState("");

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await actions.submitEmail(values);
    if (!token) return toast.error("Fill Recaptcha");
    if (!res.error) {
      form.reset();
      setHideSubjectInput(true);
      toast.success("Form submitted!");
      return;
    }
    toast.error(res.error.message);
  }
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LenpGsrAAAAADw_VMdYHxLLoktzgzIZFWVYJuBC">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("space-y-2", className)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary">Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Input your name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary">Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Input your valid email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <div className="space-y-2">
              <FormLabel className="text-primary">Subject</FormLabel>
              <Select
                onValueChange={(value) => {
                  if (value === "none") {
                    form.setValue("subject", "");
                    setHideSubjectInput(false);
                    return;
                  }
                  form.setValue("subject", value);
                  setHideSubjectInput(true);
                }}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Site Visit">Site Visit</SelectItem>
                  <SelectItem value="Request For Quotation">
                    Request For Quotation
                  </SelectItem>
                  <SelectItem value="none">Other, please specify</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem hidden={hideSubjectInput}>
                  <FormControl>
                    <Input {...field} placeholder="Please specify" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary">Message</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-32"
                    {...field}
                    placeholder="Requests/concerns"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="shadow-lg"
            disabled={form.formState.isSubmitting}
            type="submit"
          >
            Submit{" "}
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Send />
            )}
          </Button>
          <GoogleReCaptcha onVerify={setToken} />
        </form>
      </Form>
    </GoogleReCaptchaProvider>
  );
}

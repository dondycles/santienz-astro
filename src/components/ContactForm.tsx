import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { actions } from "astro:actions";
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
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import { Loader2, Send } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await actions.submitEmail(values);
    if (!res.error) {
      form.reset();
      setHideSubjectInput(true);
      toast.success("Form submitted!");
      return;
    }
    toast.error(res.error.message);
  }
  return (
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
                <SelectItem value="Request For Quotaion">
                  Request For Quotaion
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
        <Button disabled={form.formState.isSubmitting} type="submit">
          Submit{" "}
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Send />
          )}
        </Button>
      </form>
    </Form>
  );
}

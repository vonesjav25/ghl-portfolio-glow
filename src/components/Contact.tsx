
import type { ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  message: z.string().min(20, "Please share a bit more detail about the project or role."),
});

type ContactValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactValues) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Company: ${values.company || "Not provided"}`,
        "",
        values.message,
      ].join("\n")
    );

    toast({
      title: "Message prepared",
      description: "Your email client will open with the project details pre-filled.",
    });

    window.location.href = `mailto:alvinjavelosa@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  };

  const contactCards = [
    {
      title: "Email",
      value: "alvinjavelosa@gmail.com",
      href: "mailto:alvinjavelosa@gmail.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+63 916 570 5005",
      href: "tel:+639165705005",
      icon: Phone,
    },
    {
      title: "Location",
      value: "Philippines, open to remote and hybrid work",
      href: undefined,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="bg-secondary/45 py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-primary">Contact</div>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">A cleaner path for hiring teams, clients, and collaborators.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Share the role, project, or challenge you are working on. This form validates input on the frontend and prepares a structured outreach email.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            {contactCards.map((item) => {
              const Icon = item.icon;

              const content = (
                <CardShell>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{item.title}</div>
                    <div className="mt-2 text-base leading-7 text-foreground">{item.value}</div>
                  </div>
                </CardShell>
              );

              return item.href ? (
                <a key={item.title} href={item.href} className="block transition-transform duration-300 hover:-translate-y-1">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}

            <CardShell>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Code and Resume Access</div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  Code samples can be provided on request, and a resume PDF plus client references can also be shared.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full">
                    <a href="mailto:alvinjavelosa@gmail.com?subject=Resume%20Request">
                      Request Resume
                    </a>
                  </Button>
                </div>
              </div>
            </CardShell>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-card/80 p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="font-display text-3xl font-bold tracking-tight">Start the conversation</h3>
              <p className="mt-3 text-muted-foreground">
                Include the role, scope, timeline, or product context and I will have enough detail to respond quickly.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="h-12 rounded-2xl border-border/70 bg-background/80" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" className="h-12 rounded-2xl border-border/70 bg-background/80" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company or Team</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional" className="h-12 rounded-2xl border-border/70 bg-background/80" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project or Role Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about the role, project goals, stack, or timeline."
                          className="min-h-[180px] rounded-[1.5rem] border-border/70 bg-background/80 px-4 py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="rounded-full px-7" disabled={form.formState.isSubmitting}>
                  <Send className="h-4 w-4" />
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardShell = ({ children }: { children: ReactNode }) => (
  <div className="flex gap-4 rounded-[1.75rem] border border-border/70 bg-card/80 p-6 shadow-sm">
    {children}
  </div>
);

export default Contact;

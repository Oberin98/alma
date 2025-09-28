"use client";

import Image from "next/image";
import { memo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/Combobox";
import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Textarea } from "@/components/Textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/Form";

import { countries, visaTypes } from "../../mocks";

const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { error: "First name is required" })
    .max(32, { error: "First name exceeds length of 32 characters" }),

  lastName: z
    .string()
    .trim()
    .min(1, { error: "Last name is required" })
    .max(32, { error: "Last name exceeds length of 32 characters" }),

  email: z
    .email({ error: "Enter a valid email address" })
    .trim()
    .min(1, { error: "Email is required" })
    .max(64, { error: "Email exceeds maximum length of 64 characters" }),

  citizenship: z
    .string()
    .min(1, { error: "Citizenship is required" })
    .refine((value) => countries.some((country) => country.value === value), {
      error: "Please select a valid country",
    }),

  referenceLink: z
    .httpUrl({ error: "Provide valid reference link" })
    .min(1, { error: "Reference link is required" })
    .max(128, { error: "Reference link exceeds maximum length of 128 characters" }),

  description: z
    .string()
    .trim()
    .max(512, { error: "Description exceeds maximum length of 512 characters" }),

  ["visa-o-1"]: z.boolean(),
  ["visa-eb-a1"]: z.boolean(),
  ["visa-eb-2-niw"]: z.boolean(),
  ["visa-dont-know"]: z.boolean(),
});

function CreateLeadForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      citizenship: "",
      referenceLink: "",
      description: "",
      "visa-o-1": false,
      "visa-eb-a1": false,
      "visa-eb-2-niw": false,
      "visa-dont-know": false,
    },
  });

  const handleSubmit = form.handleSubmit(() => {
    router.push("/success");
  });

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-2 flex w-full items-center justify-center">
          <Image src="/info.webp" alt="info" width={100} height={100} />
        </div>

        <h3 className="mb-2 w-full text-center text-2xl font-bold">
          Whant to understand your visa options?
        </h3>

        <p className="mb-10 w-full text-center text-base font-bold">
          Submit the form below and our team of experienced attorneys will review
          your information and send a preliminary assessment of your case based on
          your goals.
        </p>

        <fieldset className="mx-auto mb-8 flex w-[400px] flex-col gap-3">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="First Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Last Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="citizenship"
            control={form.control}
            render={({ field: { value, onChange } }) => {
              return (
                <FormItem>
                  <Combobox value={value} onValueChange={onChange}>
                    <FormControl>
                      <ComboboxTrigger>
                        <ComboboxValue placeholder="Country of Citizenship" />
                      </ComboboxTrigger>
                    </FormControl>

                    <ComboboxContent>
                      <ComboboxInput placeholder="Search country" />

                      <ComboboxList>
                        <ComboboxEmpty>No country found</ComboboxEmpty>
                        <ComboboxGroup>
                          {countries.map((country) => (
                            <ComboboxItem key={country.value} value={country.value}>
                              {country.label}
                            </ComboboxItem>
                          ))}
                        </ComboboxGroup>
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="referenceLink"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Linkedin / Personal Website URL"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </fieldset>

        <div className="mb-2 flex w-full items-center justify-center">
          <Image src="/cube.webp" alt="info" width={100} height={100} />
        </div>

        <h3 className="mb-4 w-full text-center text-2xl font-bold">
          Visa categories of interest?
        </h3>

        <fieldset className="mx-auto mb-8 flex w-[400px] flex-col gap-3">
          {visaTypes.map((visa) => (
            <FormField
              key={visa.value}
              name={visa.value}
              control={form.control}
              render={({ field: { value, onChange } }) => {
                return (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          id={visa.value}
                          value={visa.value}
                          checked={value}
                          onCheckedChange={onChange}
                        />
                      </FormControl>

                      <Label htmlFor={visa.value}>{visa.label}</Label>
                    </div>
                  </FormItem>
                );
              }}
            />
          ))}
        </fieldset>

        <div className="mb-2 flex w-full items-center justify-center">
          <Image src="/heart.webp" alt="info" width={100} height={100} />
        </div>

        <h3 className="mb-4 w-full text-center text-2xl font-bold">
          How can we help you?
        </h3>

        <fieldset className="mx-auto mb-10 w-[400px]">
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="What is your current status and when does it expire? What is your past immigration history? Are you looking for long-term permanent residency or short-term employment visa or both? Are there any timeline considerations?"
                      className="max-h-64 min-h-40"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </fieldset>

        <div className="mx-auto w-[400px]">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default memo(CreateLeadForm);

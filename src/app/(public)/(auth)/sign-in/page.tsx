"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, { error: "Username is required" })
    .max(32, { error: "Username exceeds length of 32 characters" }),

  password: z
    .string()
    .trim()
    .min(1, { error: "Password is required" })
    .max(64, { error: "Password exceeds length of 64 characters" }),
});

export default function SignInPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const handleSubmit = form.handleSubmit(async (data) => {
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (!result || !result.ok) {
      // TODO: handle error
    } else {
      router.push("/leads");
    }
  });

  return (
    <div className="mx-auto w-full max-w-md rounded-lg border border-border p-8 shadow-sm">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-2xl font-semibold">Sign in</h1>
        <p className="text-sm">Sign in to your account</p>
      </div>

      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            name="username"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem className="space-y-2">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
}

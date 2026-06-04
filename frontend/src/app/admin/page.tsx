"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof schema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginForm) => {
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result.detail || "Invalid credentials");
        return;
      }

      const result = await response.json();
      localStorage.setItem("adminToken", result.token);
      router.push("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError("Unable to sign in. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('/aurora-white.png')] text-white px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl shadow-slate-900/20">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <p className="text-sm text-slate-300 mb-6">
          Use your admin credentials to view contact messages.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="block text-sm mb-2">
              Username
            </label>
            <input
              id="username"
              {...register("username")}
              className="w-full rounded-2xl border border-slate-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-sky-500"
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-2">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full rounded-2xl border border-slate-700 bg-[#111111] px-4 py-3 text-white outline-none focus:border-sky-500"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-white px-4 py-3 text-[#111111] transition hover:bg-white/50 disabled:opacity-60 cursor-pointer"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
          <div className="text-left mt-1 text-[#CFCFCF] text-xs">
            <a href="/" >Exit</a>
          </div>
          
        </form>
        
      </div>
    </main>
  );
}

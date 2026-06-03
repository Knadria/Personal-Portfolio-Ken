"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface MessageItem {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin");
      return;
    }

    const fetchMessages = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/admin/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          router.push("/admin");
          return;
        }

        if (!response.ok) {
          const result = await response.json();
          setError(result.detail || "Failed to load messages.");
          return;
        }

        const result = await response.json();
        setMessages(result);
      } catch (err) {
        console.error(err);
        setError("Unable to load messages. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-[url('/aurora-white.png')] text-white px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-900/20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-slate-400">
              Review messages submitted through the contact form.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400 cursor-pointer"
          >
            Log out
          </button>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-10 text-center text-slate-300">
            Loading messages…
          </div>
        ) : error ? (
          <div className="rounded-3xl border border-white/10 bg-rose-950/90 p-6 text-slate-100">
            {error}
          </div>
        ) : messages.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-10 text-center text-slate-300">
            No messages have been received yet.
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className="rounded-3xl border border-white/20 bg-white/10 p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm text-slate-400">From</p>
                    <p className="text-lg font-semibold">{message.name}</p>
                    <p className="text-sm text-slate-500">{message.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Subject</p>
                    <p className="text-lg font-semibold">{message.subject}</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-[#111111] p-5 text-slate-200">
                  <p>{message.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

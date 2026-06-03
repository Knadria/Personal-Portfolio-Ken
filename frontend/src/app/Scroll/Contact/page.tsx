"use client";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FlipCard } from "@/src/components/ui/card/FlipCard";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(5, "Message is too short"),
});

type FormData = z.infer<typeof schema>;
const personalInfo = [
  { icon: "/envelope.svg", category: "Email", info: "kennardkhouw@gmail.com" },
  { icon: "/phone.svg", category: "Phone", info: "(+62) 081510667868" },
  { icon: "/map-pin.svg", category: "Location", info: "Cipondoh, Tangerang" },
];
export default function Contact() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSuccess("");

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setSuccess(result.message || "Message sent successfully.");
      reset();
    } catch (error) {
      console.error(error);
      setSuccess("Unable to send message. Please try again later.");
    }
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="contact"
      className="py-24 md:py-5 max-w-7xl mx-auto mt-50 mb-30"
      ref={sectionRef}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">Contact Me</h2>
        <div className="w-20 h-2 btn rounded-full mb-16" />
      </motion.div>
      <div className="flex gap-20 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=" w-75 sm:w-150 lg:w-175 xl:w-250 p-10"
        >
          <form
            action=""
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 font-inter"
          >
            <div className="flex flex-col sm:flex-row w-full gap-5">
              <div className="sm:w-1/2">
                <label htmlFor="name">Name</label>
                <input
                  className="input-ct w-full rounded-md border-2 p-2 mt-2"
                  type="text"
                  {...register("name")}
                  placeholder="Your name"
                  id="name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  className="input-ct w-full rounded-md border-2 p-2 mt-2"
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                  {...register("email")}
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="subject">Subject</label> <br />
              <input
                className="input-ct w-full rounded-md border-2 p-2 mt-2"
                type="text"
                {...register("subject")}
                id="subject"
                placeholder="Subject"
                required
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="message">Message</label> <br />
              <textarea
                className="input-ct w-full h-32 rounded-md border-2 p-2 mt-2"
                {...register("message")}
                id="message"
                placeholder="Your Message Goes Here"
                required
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex gap-2 justify-center btn w-full cursor-pointer rounded-md p-2 text-white"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="text-white" />
            </button>
            {success && (
              <p className="text-green-500 text-center">{success}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

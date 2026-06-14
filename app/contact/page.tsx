"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PixelSeparator } from "@/components/pixel-separator";
import { Button } from "@/components/ui/button";
import { MailIcon, SendIcon, UserIcon, MessageSquareIcon } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setShowToast(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Drop a message.
          </p>
        </div>

        <PixelSeparator />

        <div className="max-w-2xl mx-auto mt-12">
          <div className="pixel-card p-8 bg-white dark:bg-black">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold mb-2 flex items-center">
                  <UserIcon className="mr-2 h-5 w-5" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border-4 border-black bg-white dark:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-primary font-pixel text-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-bold mb-2 flex items-center">
                  <MailIcon className="mr-2 h-5 w-5" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-4 border-black bg-white dark:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-primary font-pixel text-lg"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-bold mb-2 flex items-center">
                  <MessageSquareIcon className="mr-2 h-5 w-5" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 border-4 border-black bg-white dark:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-primary font-pixel text-lg"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-bold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border-4 border-black bg-white dark:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-primary font-pixel text-lg resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="pixel-button w-full text-lg py-6 rounded-none flex items-center justify-center"
              >
                {status === "submitting" ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    Send Message
                    <SendIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Retro Pixel Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <div className="fixed bottom-8 right-8 z-50">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
              className={`p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                status === "success"
                  ? "bg-primary text-black"
                  : "bg-destructive text-destructive-foreground"
              }`}
            >
              <p className="font-bold text-lg font-pixel">
                {status === "success"
                  ? "Message sent successfully!"
                  : "Please fill in all required fields."}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

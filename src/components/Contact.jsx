import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import {
  LuMail,
  LuSend,
  LuCopy,
  LuCheck,
  LuMessageSquare,
  LuClock,
  LuBriefcase,
} from "react-icons/lu";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const myEmail = "shivammaurya3659@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (data) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      toast.error(
        "Contact form is not configured: set VITE_WEB3FORMS_ACCESS_KEY in .env (or your hosting settings) and rebuild/redeploy.",
        { duration: 6000 },
      );
      return;
    }

    setIsSubmitting(true);
    const userInfo = {
      access_key: accessKey,
      name: data.name,
      email: data.email,
      subject: data.subject || "Portfolio Contact Inquiry",
      message: data.message,
      from_name: "Portfolio Contact Form",
      replyto: data.email,
    };

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        userInfo,
        { headers: { "Content-Type": "application/json" } },
      );
      if (!response.data?.success) {
        throw new Error(response.data?.message || "Form submission failed");
      }
      toast.success("Thank you! Your message has been sent successfully.");
      reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      const providerMessage =
        error.response?.data?.body?.message || error.response?.data?.message;
      toast.error(
        providerMessage ||
          "Message could not be sent. Please try again or email directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      name="Contact"
      className="py-24 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 transition-colors"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/60 mb-3">
            <LuMessageSquare className="text-sm" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Get in touch
          </h2>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-sm md:text-base">
            For software engineering opportunities or a conversation about my work, send me a message.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-5">
            {/* Status card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Active & Available for Work</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Looking for a dedicated developer?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                  I’m open to software engineering roles involving .NET, Angular, and full-stack web development.
              </p>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <LuClock className="text-cyan-600 dark:text-cyan-400" />
                  <span>Best way to reach me: Email</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuBriefcase className="text-cyan-600 dark:text-cyan-400" />
                  <span>Location: Prayagraj, UP, India (Open to Remote)</span>
                </div>
              </div>
            </div>

            {/* Direct Email Card with 1-Click Copy */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 shadow-md">
              <div className="flex items-center space-x-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                  <LuMail className="text-xl" />
                </div>
                <div className="truncate">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                    Email Me Directly
                  </span>
                  <span className="text-slate-900 dark:text-white font-medium text-xs sm:text-sm truncate block">
                    {myEmail}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center space-x-1.5 transition cursor-pointer shrink-0"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <LuCheck className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Copied
                    </span>
                  </>
                ) : (
                  <>
                    <LuCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-3">
                Social Profiles
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <a
                  href="https://www.linkedin.com/in/siva-kant-maurya-5789b9287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 dark:bg-slate-800/80 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  <FaLinkedin className="text-base text-blue-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/sivamaurya7244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white transition"
                >
                  <FaGithub className="text-base" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.instagram.com/shivam_maurya7244?igsh=b2twYTByZzIxa3cy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 hover:bg-pink-50 dark:bg-slate-800/80 dark:hover:bg-pink-950/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 transition"
                >
                  <FaInstagram className="text-base text-pink-500" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/15z3FQichX/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 dark:bg-slate-800/80 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-500 transition"
                >
                  <FaFacebook className="text-base text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in the form below and I will get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    htmlFor="name"
                  >
                    Full Name *
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    id="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-500 mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    htmlFor="email"
                  >
                    Email Address *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    id="email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-500 mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    {...register("subject")}
                    id="subject"
                    type="text"
                    placeholder="e.g. Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    id="message"
                    rows="4"
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none transition resize-none"
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs text-rose-500 mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-600 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold text-sm shadow-sm transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending Your Message...</span>
                    </span>
                  ) : (
                    <>
                      <LuSend className="text-base" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

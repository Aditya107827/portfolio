import { SectionHeading } from "../SectionHeadiing/SectionHeading"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser"

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!formData.subject.trim()) {
      toast.error("Please enter your subject");
      return;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Message should be at least 10 characters");
      return;
    }
    try {
      await emailjs.send(
        "service_2bosqqt",
        "template_uqu0thf",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "0JXtIdmwyXW8gRROn"
      );
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again")
    }

  };
  return (
    <section id="contact" className="scroll-mt-24 min-h-screen bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Work Together"
        />

        {/* Main Contact Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-8">

            {/* Introduction */}
            <div>
              <h3 className="text-3xl font-bold text-white">
                Have a project in mind?
              </h3>

              <p className="text-slate-400 mt-4 leading-7 max-w-lg">
                I'm always open to discussing new projects, creative ideas,
                or opportunities to be part of your team.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                  📧
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <a href="mailto:adityapratap96481@gmail.com"
                    className="text-white hover:text-indigo-400 transition-colors">
                    adityapratap96481@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                  📍
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p className="text-white">
                    India
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-slate-500 mb-3">
                Connect With Me
              </p>

              <div className="flex items-center gap-4">

                {/* GitHub */}
                <a
                  href="https://github.com/Aditya107827"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/aditya-singh9648/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/adi_357/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-yellow-400 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <SiLeetcode className="text-xl" />
                </a>

              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>

            <form onSubmit={handleSubmit}
              className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-indigo-500 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-indigo-500 transition-all duration-300"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-indigo-500 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 outline-none focus:border-indigo-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};


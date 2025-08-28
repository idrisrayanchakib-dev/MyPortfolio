import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { Github, Linkedin} from "lucide-react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';




export const ContactSection = () => {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;

  setLoading(true);
  setError(null);
  // Send the email
  emailjs
    .sendForm(
      "service_wzk4dks",       
      "template_k7izx5x",      
      form,
      "uwQlfQQ5w_yOR6hnB"        
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        setSubmitted(true);
        form.reset();
        setLoading(false);

        // Auto-hide error message
        setTimeout(() => setError(null), 4000);
        // Auto-hide success message
        setTimeout(() => setSubmitted(false), 4000);
      },
      (error) => {
        console.error("Email error:", error.text);
        setError("⚠️ Oops! Something went wrong. Please try again.")
        setLoading(false);
      }
    );
    
};


  return (
    <section id="contact" className="py-16 px-6 scroll-mt-16">
      <div className="max-w-2xl mx-auto text-center">
       
       <h2 className="text-3xl md:text-5xl font-bold ">Get In Touch</h2>

        {/* Contact Form */}
        <Card className="p-10 border border-white/30 mt-12 "
        style={{
          height: "600px",
          boxShadow: "0 0 15px 3px rgba(0, 173, 255, 0.7), 0 0 30px 6px rgba(0, 173, 255, 0.4)",
          border: "1px solid rgba(0, 173, 255, 0.6)"
         }}
        >
          <form
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="text-left">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Name / Company
              </label>
              <Input
                type="text"
                id="name"
                name="from_name"
                placeholder="your name or Company name."
                required
                className=" border-white/40  focus:border-white/80 font-mono "
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Email / Phone
              </label>
              <Input
                type="email"
                id="email"
                name="from_email"
                placeholder="example@gmail.com"
                required
                className=" border-white/50 focus:border-white/80 font-mono "
              />
            </div>

            {/* Message */}
            <div className="text-left">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white/80 mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows={5}
                required
                className=" border-white/50  focus:border-white/80 font-mono"
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-mono bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_10px_rgba(0,173,255,0.7)]"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </div>
            {/* Horizontal line */}
             <hr className="my-6 border-t border-white/30" />
            {/* Social icons */}
<div className="flex justify-center gap-6">
  <a
    href="https://github.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-cyan-400 transition-colors"
  >
    <Github size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-cyan-400 transition-colors"
  >
    <Linkedin size={24} />
  </a>
   <a
    href="https://x.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/80 hover:text-cyan-400 transition-colors"
  >
    <FontAwesomeIcon icon={faXTwitter} style={{ width: 24, height: 24 }} />
  </a>

</div>

          </form>

             {/* Error Message */}
            {error && (
             <div className="mt-4 p-4 rounded-lg bg-red-500/10 text-red-500 border border-red-500/30 animate-fade-in">
              {error}
             </div>
            )}

             {/* ✅ Success message */}
           {submitted && (
            <div className="mt-6 p-4 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 animate-fade-in">
              ✅ Thank you! Your message has been sent.
            </div>
           )}
        </Card>
      </div>
    </section>
  );
};

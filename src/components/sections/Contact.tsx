import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

type FormState = { name: string; email: string; message: string };

const SOCIALS = [
  { 
    label: "GitHub", 
    href: "https://github.com/HungggAnhh",
    icon: "🐙",
    description: "Check out my code",
    gradient: "from-gray-700 to-gray-900"
  },
  { 
    label: "Facebook", 
    href: "https://www.facebook.com/vo.mai.hung.anh.2024",
    icon: "📘",
    description: "Connect on social",
    gradient: "from-blue-500 to-blue-700"
  },
  { 
    label: "Email", 
    href: "mailto:vmha0312@gmail.com",
    icon: "✉️",
    description: "vmha0312@gmail.com",
    gradient: "from-purple-500 to-pink-600"
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<"ok" | "err" | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Validate tối thiểu
    const emailOk = /\S+@\S+\.\S+/.test(form.email);
    if (!form.name || !emailOk || !form.message) {
      setDone("err");
      setSending(false);
      setTimeout(() => setDone(null), 3000);
      return;
    }

    const subject = encodeURIComponent(`[Portfolio] ${form.name} liên hệ`);
    const body = encodeURIComponent(
      `Tên: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    // Mở trình gửi email của người dùng
    window.location.href = `mailto:vmha0312@gmail.com?subject=${subject}&body=${body}`;
    setDone("ok");
    setSending(false);
    
    // Reset form sau khi gửi thành công
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setDone(null);
    }, 3000);
  };

  return (
    <section className="section-spacing relative">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-25"></div>
      
      <div className="container-default relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <SectionTitle
            title="Let's Connect"
            subtitle="Get connected – I'm always open for internships, freelance opportunities or project collaborations 👋"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Quick contact cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {SOCIALS.map((social, index) => (
              <Card
                key={social.label}
                className="p-6 glass-effect interactive-hover text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl filter drop-shadow-sm">{social.icon}</span>
                  </div>
                  
                  {/* Label */}
                  <h4 className="text-lg font-bold mb-2 gradient-text group-hover:scale-105 transition-transform">
                    {social.label}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                    {social.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-3 inline-flex items-center text-xs text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Click to connect</span>
                    <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Main contact form */}
          <Card className="p-8 md:p-10 glass-effect">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 gradient-text">Send me a message</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I'd love to hear about your project or just say hi! 🚀
              </p>
            </div>

            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Honeypot chống bot (ẩn) */}
              <input type="text" name="_hp" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Name and Email row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span>👤</span>
                    Your Name
                  </label>
                  <input
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all placeholder-slate-400 backdrop-blur-sm"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <span>📧</span>
                    Email Address
                  </label>
                  <input
                    className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all placeholder-slate-400 backdrop-blur-sm"
                    placeholder="john@example.com"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <span>💬</span>
                  Your Message
                </label>
                <textarea
                  className="w-full rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 min-h-[140px] outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all placeholder-slate-400 backdrop-blur-sm resize-none"
                  placeholder="your message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>

              {/* Submit section */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <button 
                  type="submit"
                  className="btn btn-primary group flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={sending}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">✈️</span>
                    </>
                  )}
                </button>

                {/* Status messages */}
                <div className="flex items-center min-h-[24px]">
                  {done === "ok" && (
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 animate-fade-in">
                      <span>✅</span>
                      <span className="text-sm font-medium">Email client opened! Thank you!</span>
                    </div>
                  )}
                  {done === "err" && (
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 animate-fade-in">
                      <span>❌</span>
                      <span className="text-sm font-medium">Please fill in all fields correctly.</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </Card>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Card className="inline-block p-6 glass-effect">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl">🤝</span>
                    <h4 className="font-bold gradient-text">Let's Build Something Amazing Together!</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Available for internships • Freelance projects • Open source collaboration
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Custom styles for fade-in animation */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
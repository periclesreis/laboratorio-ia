"use client";

import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Inicializar EmailJS com sua Public Key
emailjs.init("DABwsM0S55r0Xfgq_");

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await emailjs.send(
        "email_do_bol", // Service ID
        "template_uvyhmvc", // Template ID
        {
          to_email: "periclesreis@bol.com.br",
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setStatus("success");
        setStatusMessage("Mensagem enviada com sucesso! Obrigado pelo contato.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Erro ao enviar mensagem. Tente novamente mais tarde.");
      console.error("Erro ao enviar email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Contato</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tem dúvidas ou quer colaborar? Estamos aqui para ajudar!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

                {/* Email */}
                <div className="card-hover card-ia">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Email</h3>
                      <a
                        href="mailto:periclesreis@bol.com.br"
                        className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                      >
                        periclesreis@bol.com.br
                      </a>
                    </div>
                  </div>
                </div>

                {/* Telefone */}
                <div className="card-hover card-ia">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="font-bold text-white mb-2">Telefone</h3>
                      <a
                        href="tel:+5577988122104"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        (77) 98812-2104
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="card-hover card-ia">
                  <div>
                    <h3 className="font-bold text-white mb-4">Redes Sociais</h3>
                    <div className="space-y-3">
                      <a
                        href="https://www.instagram.com/pericles.silvareis?igsh=MTJqdTk1ZWY1N2VtNA=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors"
                      >
                        <span className="text-2xl">📷</span>
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/pericles-silva-reis-0085b6387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <span className="text-2xl">💼</span>
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Qual é o assunto?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Sua mensagem aqui..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    />
                  </div>

                  {/* Status Message */}
                  {status === "success" && (
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                      ✅ {statusMessage}
                    </div>
                   )}

                  {status === "error" && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      ❌ {statusMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enviando..." : "Enviar Mensagem"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Perguntas Frequentes</h2>

            <div className="space-y-4">
              <details className="group card-hover card-ia cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white">
                  <span>Qual é o tempo de resposta?</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Geralmente respondemos em até 24 horas. Para assuntos urgentes, entre em contato pelo telefone.
                </p>
              </details>

              <details className="group card-hover card-ia cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white">
                  <span>Vocês oferecem consultoria?</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Sim! Oferecemos consultoria em IA, programação e desenvolvimento de soluções customizadas. Entre em contato para mais detalhes.
                </p>
              </details>

              <details className="group card-hover card-ia cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white">
                  <span>Como posso colaborar com o laboratório?</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Adoraríamos contar com sua colaboração! Envie suas ideias, projetos ou sugestões através do formulário acima ou nos contate diretamente.
                </p>
              </details>

              <details className="group card-hover card-ia cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-white">
                  <span>Vocês têm API disponível?</span>
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                  Estamos desenvolvendo uma API pública. Fique atento às atualizações no blog e redes sociais!
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-hover card-ia text-center">
              <h2 className="text-2xl font-bold mb-4">Pronto para começar?</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Explore nossos artigos, aplicativos e tutoriais sobre Inteligência Artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/ia"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-2 font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50"
                >
                  Explorar IA
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-lg border border-purple-500/50 bg-purple-500/10 px-6 py-2 font-semibold text-purple-300 transition-all hover:bg-purple-500/20"
                >
                  Ver Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

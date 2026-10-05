"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import PageLayout from "../templates/PageLayout";
import { z, ZodError } from "zod";
import { toast } from "react-toastify";
import { HiPaperAirplane } from "react-icons/hi2";
import { MdMail, MdWhatsapp, MdQuestionAnswer } from "react-icons/md";
import { PageTitle } from "../molecules/PageTitle";

export const Contact = () => {
  const [isFormBlocked, setIsFormBlocked] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [fields, setFields] = useState<
    {
      name: string;
      type: "text" | "email" | "tel";
      label: string;
      placeholder: string;
      span: boolean;
      maxLength: number;
      value: string;
      getError: (value: string) => string | undefined | null;
      long?: boolean;
      error?: string;
    }[]
  >([
    {
      name: "name",
      type: "text",
      label: "Seu nome",
      placeholder: "Digite seu nome completo",
      span: true,
      maxLength: 50,
      value: "",
      getError: (value: string) => {
        try {
          z.string().min(3, "Insira um nome válido!").parse(value);
          return undefined;
        } catch (err: unknown) {
          return (err as ZodError).issues[0].message;
        }
      },
    },
    {
      name: "email",
      type: "email",
      label: "E-mail",
      placeholder: "seu.email@exemplo.com",
      span: false,
      maxLength: 50,
      value: "",
      getError: (value: string) => {
        try {
          z.string().email("Insira um e-mail válido!").parse(value);
          return undefined;
        } catch (err: unknown) {
          return (err as ZodError).issues[0].message;
        }
      },
    },
    {
      name: "phone",
      type: "tel",
      label: "Telefone / WhatsApp",
      placeholder: "(71) 99999-9999",
      span: false,
      maxLength: 30,
      value: "",
      getError: (value: string) => {
        try {
          z.string()
            .min(10, "Insira um telefone válido com DDD!")
            .parse(value.replace(/[^0-9+]/g, ""));
          return undefined;
        } catch (err: unknown) {
          return (err as ZodError).issues[0].message;
        }
      },
    },
    {
      name: "message",
      type: "text",
      label: "Sua mensagem",
      placeholder: "Descreva brevemente sua ideia ou projeto...",
      span: true,
      maxLength: 300,
      value: "",
      getError: (value: string) => {
        try {
          z.string().min(5, "Insira uma mensagem válida!").parse(value);
          return undefined;
        } catch (err: unknown) {
          return (err as ZodError).issues[0].message;
        }
      },
      long: true,
    },
  ]);

  function sendEmail() {
    const formData = fields.reduce(
      (obj, item) => Object.assign(obj, { [item.name]: item.value }),
      {} as Record<string, string>,
    );

    const templateParams = {
      title: `Novo contato de ${formData.name}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `Telefone: ${formData.phone}\n\nMensagem:\n${formData.message}`,
      time: new Date().toLocaleString("pt-BR"),
    };

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Erro ao enviar mensagem. Entre em contato via WhatsApp!");
      setIsSending(false);
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success(
          "Sua mensagem foi enviada! Entrarei em contato em breve.",
        );
        setIsFormBlocked(true);
      })
      .catch((err) => {
        console.error("Erro EmailJS: ", err);
        toast.error(
          "Erro ao enviar mensagem, entre em contato através do WhatsApp!",
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;
    const updatedFields = fields.map((field) => {
      const error = field.getError(field.value);
      if (error || !field.value) {
        hasError = true;
      }
      return {
        ...field,
        error: error ?? (field.value ? undefined : "Campo obrigatório"),
      };
    });

    setFields(updatedFields);

    if (!hasError) {
      setIsSending(true);
      sendEmail();
    } else {
      toast.error("Preencha o formulário corretamente!");
    }
  };

  const faqs = [
    {
      q: "Qual o prazo médio para desenvolvimento de um projeto?",
      a: "Varia conforme o escopo. Landing pages levam em média 1 semana, enquanto SaaS e sistemas completos requerem no mínimo 6 semanas.",
    },
    {
      q: "Você presta manutenção pós-entrega?",
      a: "Sim! Ofereço suporte contínuo, correção de bugs e evolução do sistema após o lançamento.",
    },
  ];

  return (
    <PageLayout id="contact">
      <div
        id="contact-child"
        className="w-full flex flex-col gap-10  max-w-6xl mx-auto"
      >
        {/* Cabeçalho */}
        <section className="flex flex-col items-center gap-3 text-center w-full">
          <PageTitle text1="Vamos" text2="conversar" reverse />
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl font-normal leading-relaxed">
            Tem uma ideia inovadora, precisa de uma consultoria ou quer
            construir uma aplicação do zero? Escolha o melhor canal abaixo!
          </p>
        </section>

        {/* Grid do Conteúdo (Cards + Formulário) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lado Esquerdo: Cards de Acesso Rápido + FAQ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-xs uppercase font-bold tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-fit">
                Atendimento Direto
              </h3>

              {/* Card WhatsApp */}
              <a
                href="https://api.whatsapp.com/send?phone=+5571984479191&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <MdWhatsapp className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">
                    Conversa Instantânea
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    Chamar no WhatsApp
                  </span>
                </div>
              </a>

              {/* Card Email */}
              <a
                href="mailto:anthonyvictor.dev@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-white/10 backdrop-blur-md hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <MdMail className="text-2xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-zinc-400">
                    Propostas Formais
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    anthonyvictor.dev@gmail.com
                  </span>
                </div>
              </a>
            </div>

            {/* Dúvidas Frequentes */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-xs uppercase font-bold tracking-widest text-zinc-400 flex items-center gap-1.5">
                <MdQuestionAnswer className="text-emerald-400 text-sm" />{" "}
                Dúvidas Frequentes
              </h3>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/20 border border-white/5 flex flex-col gap-1"
                  >
                    <span className="text-xs font-semibold text-zinc-200">
                      {faq.q}
                    </span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lado Direito: Formulário EmailJS */}
          <form
            id="contact-form"
            name="contact-form"
            className={`lg:col-span-7 w-full relative rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md p-6 sm:p-8 shadow-2xl flex flex-col gap-4 transition-all duration-300 ${
              isFormBlocked ? "pointer-events-none select-none opacity-50" : ""
            }`}
            onSubmit={handleSubmit}
          >
            {/* Brilho decorativo */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fields.map((x) => {
                const isError = Boolean(x.error);
                const commonClasses = `w-full rounded-xl p-3.5 text-sm bg-zinc-950/60 border text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:bg-zinc-900/90 ${
                  isError
                    ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/50"
                    : "border-white/10 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50"
                }`;

                return (
                  <fieldset
                    key={x.name}
                    className={`flex flex-col gap-1 z-10 ${
                      x.span ? "sm:col-span-2" : ""
                    }`}
                  >
                    <label
                      htmlFor={`${x.name}-input`}
                      className="text-xs font-semibold uppercase tracking-wider text-zinc-300"
                    >
                      {x.label}
                    </label>

                    {x.long ? (
                      <textarea
                        id={`${x.name}-input`}
                        name={`${x.name}-input`}
                        rows={4}
                        maxLength={x.maxLength}
                        value={x.value}
                        placeholder={x.placeholder}
                        className={`${commonClasses} resize-none`}
                        onChange={(e) =>
                          setFields((prev) =>
                            prev.map((y) =>
                              y.name === x.name
                                ? {
                                    ...y,
                                    value: e.target.value,
                                    error: undefined,
                                  }
                                : y,
                            ),
                          )
                        }
                        onBlur={(e) => {
                          const error = x.getError(e.target.value);
                          setFields((prev) =>
                            prev.map((y) =>
                              y.name === x.name
                                ? { ...y, error: error ?? undefined }
                                : y,
                            ),
                          );
                        }}
                      />
                    ) : (
                      <input
                        id={`${x.name}-input`}
                        name={`${x.name}-input`}
                        type={x.type}
                        maxLength={x.maxLength}
                        value={x.value}
                        placeholder={x.placeholder}
                        className={commonClasses}
                        onChange={(e) =>
                          setFields((prev) =>
                            prev.map((y) =>
                              y.name === x.name
                                ? {
                                    ...y,
                                    value: e.target.value,
                                    error: undefined,
                                  }
                                : y,
                            ),
                          )
                        }
                        onBlur={(e) => {
                          const error = x.getError(e.target.value);
                          setFields((prev) =>
                            prev.map((y) =>
                              y.name === x.name
                                ? { ...y, error: error ?? undefined }
                                : y,
                            ),
                          );
                        }}
                      />
                    )}

                    <small
                      className={`text-xs min-h-[18px] transition-all ${
                        x.error ? "text-red-400 opacity-100" : "opacity-0"
                      }`}
                    >
                      {x.error ?? "x"}
                    </small>
                  </fieldset>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={isFormBlocked || isSending}
              className="mt-2 w-full py-3.5 px-6 rounded-xl text-sm font-bold tracking-wide uppercase text-zinc-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none z-10"
            >
              {isSending ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 animate-spin fill-zinc-950 text-emerald-800"
                  viewBox="0 0 100 101"
                  fill="none"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              ) : (
                <>
                  Enviar Mensagem
                  <HiPaperAirplane className="text-base rotate-45" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import celiAbout from "@/assets/celi-about.jpg";
import VideoGallery from "@/components/VideoGallery";
import { supabase } from "../lib/supabase";

export const Route = createFileRoute("/agendar")({
  component: Agendar,
  head: () => ({
    title: "Hipnoterapia Ericksoniana Online | Celi Naname",
    meta: [
      {
        name: "description",
        content:
          "Sessões de hipnoterapia ericksoniana online para todo o Brasil. Ansiedade, padrões limitantes e autoconhecimento. Agende pelo WhatsApp.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap",
      },
    ],
  }),
});

function Agendar() {
  const WHATSAPP_LINK =
    "https://wa.me/5511973894624?text=Ol%C3%A1+Celi%2C+vim+pelo+Google+e+gostaria+de+agendar+uma+sess%C3%A3o+de+hipnoterapia.";

  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadConsent, setLeadConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadName && leadEmail && leadPhone && leadConsent) {
      setIsSubmitting(true);
      
      try {
        const { error } = await supabase
          .from("leads")
          .insert([
            {
              nome: leadName,
              email: leadEmail,
              telefone: leadPhone,
              aceita_comunicacao: leadConsent,
            },
          ]);

        if (error) {
          console.error("Erro ao salvar lead no Supabase:", error);
          alert("Houve um erro ao enviar seus dados. Por favor, tente novamente.");
          setIsSubmitting(false);
          return;
        }

        console.log("Lead captured and saved to Supabase");
        setIsSubmitted(true);
      } catch (err) {
        console.error("Erro inesperado:", err);
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    // FAQ toggle logic
    const faqItems = document.querySelectorAll(".agendar-page .faq-item");
    const toggleFaq = (item: Element) => {
      const isOpen = item.classList.contains("open");
      faqItems.forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    };

    const faqQuestions = document.querySelectorAll(".agendar-page .faq-q");
    faqQuestions.forEach((question, index) => {
      const item = faqItems[index];
      const handler = () => toggleFaq(item);
      question.addEventListener("click", handler);
      // Store handler to remove it later if needed, but for LP simplicity we'll just use the effect cleanup
    });

    // Scroll reveal logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(".agendar-page .reveal")
      .forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .agendar-page {
          --teal: #2AACAB;
          --teal-dark: #1a7f7f;
          --teal-light: #5BC8C7;
          --teal-faint: #e8f7f7;
          --dark: #1A3A3A;
          --cream: #F5FBFB;
          --white: #ffffff;
          --wa: #25D366;
          --wa-dark: #1ebe5d;
          --text: #2c4a4a;
          --muted: #6a9a9a;
          
          font-family: 'Jost', sans-serif;
          background: var(--cream);
          color: var(--text);
          overflow-x: hidden;
        }

        .agendar-page *, .agendar-page *::before, .agendar-page *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .agendar-page .hero {
          min-height: 100vh;
          background: var(--dark);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px 80px;
          overflow: hidden;
        }

        .agendar-page .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(42,172,171,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 10% 80%, rgba(91,200,199,0.10) 0%, transparent 55%);
          pointer-events: none;
        }

        /* Decorative rings */
        .agendar-page .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(42,172,171,0.15);
          pointer-events: none;
          animation: pulse-ring 6s ease-in-out infinite;
        }
        .agendar-page .ring:nth-child(1) { width: 400px; height: 400px; top: -100px; right: -100px; animation-delay: 0s; }
        .agendar-page .ring:nth-child(2) { width: 280px; height: 280px; top: -40px; right: -40px; border-color: rgba(42,172,171,0.22); animation-delay: 1s; }
        .agendar-page .ring:nth-child(3) { width: 180px; height: 180px; bottom: 60px; left: -60px; animation-delay: 2s; }
        .agendar-page .ring:nth-child(4) { width: 80px; height: 80px; bottom: 100px; left: -20px; border-color: rgba(91,200,199,0.3); animation-delay: 3s; }

        @keyframes pulse-ring {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }

        .agendar-page .hero-tag {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--teal-light);
          margin-bottom: 28px;
          opacity: 0;
          animation: fade-up 0.8s ease forwards 0.2s;
        }

        .agendar-page .hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.8rem, 7vw, 5.2rem);
          line-height: 1.05;
          color: var(--white);
          text-align: center;
          max-width: 760px;
          opacity: 0;
          animation: fade-up 0.8s ease forwards 0.4s;
        }

        .agendar-page .hero h1 em {
          font-style: italic;
          color: var(--teal-light);
        }

        .agendar-page .hero-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(1rem, 2.5vw, 1.15rem);
          color: rgba(245,251,251,0.72);
          text-align: center;
          max-width: 520px;
          margin-top: 24px;
          line-height: 1.7;
          opacity: 0;
          animation: fade-up 0.8s ease forwards 0.6s;
        }

        .agendar-page .hero-cta {
          margin-top: 48px;
          opacity: 0;
          animation: fade-up 0.8s ease forwards 0.8s;
        }

        .agendar-page .btn-wa {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: var(--wa);
          color: #fff;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 1.05rem;
          letter-spacing: 0.03em;
          text-decoration: none;
          padding: 18px 38px;
          border-radius: 60px;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
          box-shadow: 0 8px 32px rgba(37,211,102,0.28);
          position: relative;
          overflow: hidden;
        }

        .agendar-page .btn-wa::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: rgba(255,255,255,0);
          transition: background 0.2s;
        }

        .agendar-page .btn-wa:hover {
          background: var(--wa-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(37,211,102,0.38);
        }

        .agendar-page .btn-wa:active { transform: translateY(0); }

        .agendar-page .btn-wa svg { flex-shrink: 0; }

        .agendar-page .hero-note {
          margin-top: 18px;
          font-size: 0.8rem;
          color: rgba(245,251,251,0.45);
          letter-spacing: 0.04em;
          opacity: 0;
          animation: fade-up 0.8s ease forwards 1s;
        }

        /* scroll indicator */
        .agendar-page .scroll-hint {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0;
          animation: fade-up 0.8s ease forwards 1.2s;
        }
        .agendar-page .scroll-hint span { font-size: 0.68rem; letter-spacing: 0.2em; color: rgba(245,251,251,0.35); text-transform: uppercase; }
        .agendar-page .scroll-line { width: 1px; height: 40px; background: linear-gradient(to bottom, rgba(42,172,171,0.6), transparent); animation: scroll-drop 1.6s ease-in-out infinite; }
        @keyframes scroll-drop { 0% { opacity: 0; transform: scaleY(0); transform-origin: top; } 50% { opacity: 1; transform: scaleY(1); } 100% { opacity: 0; transform: scaleY(1); transform-origin: bottom; } }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── BENEFÍCIOS ── */
        .agendar-page .section { padding: 80px 24px; }
        .agendar-page .container { max-width: 960px; margin: 0 auto; }

        .agendar-page .section-tag {
          font-size: 0.68rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 12px;
        }

        .agendar-page .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--dark);
          line-height: 1.15;
          margin-bottom: 48px;
        }

        .agendar-page .section-title em { font-style: italic; color: var(--teal); }

        .agendar-page .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .agendar-page .benefit-card {
          background: var(--white);
          border: 1px solid rgba(42,172,171,0.12);
          border-radius: 16px;
          padding: 32px 28px;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .agendar-page .benefit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 100%;
          background: var(--teal);
          border-radius: 3px 0 0 3px;
        }

        .agendar-page .benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(26,122,121,0.1);
        }

        .agendar-page .benefit-icon {
          width: 44px; height: 44px;
          background: var(--teal-faint);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 1.3rem;
        }

        .agendar-page .benefit-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--dark);
          margin-bottom: 10px;
        }

        .agendar-page .benefit-card p {
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--muted);
          font-weight: 300;
        }

        /* ── PARA QUEM ── */
        .agendar-page .for-who { background: var(--dark); padding: 80px 24px; }

        .agendar-page .for-who .section-title { color: var(--white); }
        .agendar-page .for-who .section-title em { color: var(--teal-light); }
        .agendar-page .for-who .section-tag { color: var(--teal-light); }

        .agendar-page .tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 40px;
        }

        .agendar-page .tag-pill {
          background: rgba(42,172,171,0.12);
          border: 1px solid rgba(42,172,171,0.25);
          color: var(--teal-light);
          font-size: 0.88rem;
          font-weight: 400;
          padding: 10px 20px;
          border-radius: 40px;
          letter-spacing: 0.02em;
          transition: background 0.2s;
        }

        .agendar-page .tag-pill:hover { background: rgba(42,172,171,0.22); }

        /* ── SOBRE ── */
        .agendar-page .sobre { padding: 80px 24px; background: var(--white); }

        .agendar-page .sobre-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .agendar-page .sobre-photo {
          aspect-ratio: 3/4;
          border-radius: 24px;
          background: var(--teal-faint);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agendar-page .sobre-photo-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--teal);
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .agendar-page .sobre-photo-placeholder svg { width: 48px; height: 48px; }

        .agendar-page .sobre-photo::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 40%;
          background: linear-gradient(to top, rgba(26,58,58,0.15), transparent);
        }

        .agendar-page .sobre-content .section-tag { margin-bottom: 12px; }

        .agendar-page .sobre-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          color: var(--dark);
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .agendar-page .sobre-content p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--muted);
          font-weight: 300;
          margin-bottom: 16px;
        }

        .agendar-page .sobre-selos {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }

        .agendar-page .selo {
          background: var(--teal-faint);
          color: var(--teal-dark);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 6px 14px;
          border-radius: 6px;
          letter-spacing: 0.04em;
        }

        /* ── DEPOIMENTOS ── */
        .agendar-page .depoimentos { padding: 80px 24px; background: var(--cream); }

        .agendar-page .dep-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .agendar-page .dep-card {
          background: var(--white);
          border-radius: 16px;
          padding: 32px 28px;
          border: 1px solid rgba(42,172,171,0.1);
          position: relative;
        }

        .agendar-page .dep-card::before {
          content: '"';
          font-family: 'Cormorant Garamond', serif;
          font-size: 5rem;
          color: var(--teal);
          opacity: 0.15;
          position: absolute;
          top: 8px; left: 20px;
          line-height: 1;
        }

        .agendar-page .dep-text {
          font-size: 0.93rem;
          line-height: 1.75;
          color: var(--text);
          font-weight: 300;
          font-style: italic;
          margin-bottom: 20px;
          padding-top: 20px;
        }

        .agendar-page .dep-author {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--teal);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* ── FAQ ── */
        .agendar-page .faq { padding: 80px 24px; background: var(--white); }

        .agendar-page .faq-list { margin-top: 48px; max-width: 720px; }

        .agendar-page .faq-item {
          border-bottom: 1px solid rgba(42,172,171,0.15);
          padding: 24px 0;
        }

        .agendar-page .faq-q {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--dark);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          user-select: none;
        }

        .agendar-page .faq-q span { color: var(--teal); font-size: 1.4rem; transition: transform 0.3s; }
        .agendar-page .faq-item.open .faq-q span { transform: rotate(45deg); }

        .agendar-page .faq-a {
          font-size: 0.9rem;
          line-height: 1.8;
          color: var(--muted);
          font-weight: 300;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.3s;
        }

        .agendar-page .faq-item.open .faq-a {
          max-height: 300px;
          padding-top: 16px;
        }

        /* ── LEAD FORM ── */
        .agendar-page .lead-form-section {
          background: var(--teal-faint);
          padding: 80px 24px;
        }

        .agendar-page .lead-form-container {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 24px;
          box-shadow: 0 16px 48px rgba(26,122,121,0.08);
          border: 1px solid rgba(42,172,171,0.1);
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          overflow: hidden;
          text-align: left;
        }

        @media (max-width: 768px) {
          .agendar-page .lead-form-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }

        .agendar-page .lead-image-col {
          background: var(--teal-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agendar-page .lead-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .agendar-page .lead-form-content {
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .agendar-page .lead-form-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          color: var(--dark);
          margin-bottom: 12px;
          line-height: 1.15;
        }

        .agendar-page .lead-form-content h2 em {
          color: var(--teal);
          font-style: italic;
        }

        .agendar-page .lead-form-content p {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .agendar-page .lead-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .agendar-page .lead-input {
          width: 100%;
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid rgba(42,172,171,0.2);
          font-family: 'Jost', sans-serif;
          font-size: 1rem;
          color: var(--text);
          background: var(--cream);
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .agendar-page .lead-input:focus {
          outline: none;
          border-color: var(--teal);
          box-shadow: 0 0 0 3px rgba(42,172,171,0.1);
        }

        .agendar-page .lead-checkbox-group {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          text-align: left;
          margin-top: 4px;
        }

        .agendar-page .lead-checkbox {
          appearance: none;
          min-width: 20px;
          height: 20px;
          border: 1px solid rgba(42,172,171,0.4);
          border-radius: 6px;
          background: var(--white);
          cursor: pointer;
          position: relative;
          margin-top: 2px;
          transition: background 0.2s, border-color 0.2s;
        }

        .agendar-page .lead-checkbox:checked {
          background: var(--teal);
          border-color: var(--teal);
        }

        .agendar-page .lead-checkbox:checked::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 2px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .agendar-page .lead-checkbox-label {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.5;
          cursor: pointer;
        }

        .agendar-page .btn-download {
          background: var(--teal);
          color: var(--white);
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: 1.05rem;
          padding: 18px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 8px;
        }

        .agendar-page .btn-download:hover {
          background: var(--teal-dark);
          transform: translateY(-2px);
        }

        .agendar-page .success-message {
          padding: 32px 24px;
          background: rgba(42,172,171,0.1);
          color: var(--teal-dark);
          border-radius: 16px;
          font-weight: 500;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .agendar-page .success-message a {
          background: var(--teal);
          color: white;
          padding: 14px 28px;
          border-radius: 60px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .agendar-page .success-message a:hover {
          background: var(--teal-dark);
        }

        /* ── CTA FINAL ── */
        .agendar-page .cta-final {
          background: var(--teal);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .agendar-page .cta-final::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 80% at 90% 50%, rgba(255,255,255,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 30% 60% at 10% 50%, rgba(26,58,58,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        .agendar-page .cta-final h2 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2rem, 5vw, 3.4rem);
          color: var(--white);
          line-height: 1.15;
          margin-bottom: 16px;
          position: relative;
        }

        .agendar-page .cta-final p {
          font-size: 1rem;
          color: rgba(255,255,255,0.78);
          font-weight: 300;
          margin-bottom: 40px;
          position: relative;
        }

        .agendar-page .cta-final .btn-wa {
          background: var(--white);
          color: var(--teal-dark);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          position: relative;
        }

        .agendar-page .cta-final .btn-wa:hover {
          background: var(--cream);
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
        }

        /* ── FOOTER ── */
        .agendar-page footer {
          background: var(--dark);
          padding: 32px 24px;
          text-align: center;
        }

        .agendar-page footer p {
          font-size: 0.78rem;
          color: rgba(245,251,251,0.35);
          line-height: 1.8;
          letter-spacing: 0.04em;
        }

        .agendar-page footer a { color: var(--teal-light); text-decoration: none; }

        /* ── FLOAT WA ── */
        .agendar-page .float-wa {
          position: fixed;
          bottom: 28px;
          right: 24px;
          z-index: 999;
          background: var(--wa);
          width: 56px; height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 24px rgba(37,211,102,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          animation: float-bounce 3s ease-in-out infinite;
        }

        .agendar-page .float-wa:hover {
          transform: scale(1.1);
          box-shadow: 0 10px 32px rgba(37,211,102,0.5);
        }

        @keyframes float-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .agendar-page .sobre-inner { grid-template-columns: 1fr; gap: 40px; }
          .agendar-page .sobre-photo { aspect-ratio: 4/3; max-height: 300px; }
        }

        /* scroll reveal */
        .agendar-page .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .agendar-page .reveal.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="agendar-page relative">
        {/* Home Button */}
        <a
          href="/"
          className="absolute top-6 left-6 z-50 text-white/80 hover:text-white flex items-center gap-2 text-sm tracking-widest uppercase transition-colors"
          aria-label="Voltar para a Home"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Voltar
        </a>

        {/* Float WhatsApp */}
        <a
          className="float-wa"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener"
          aria-label="Agendar pelo WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* HERO */}
        <section className="hero">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>

          <p className="hero-tag">
            Hipnoterapia Ericksoniana · Online para todo o Brasil
          </p>

          <h1>
            Transforme o que te<br />
            limita em <em>liberdade</em>
          </h1>

          <p className="hero-sub">
            Sessões individuais de hipnoterapia ericksoniana para ansiedade,
            padrões limitantes e autoconhecimento — no conforto da sua casa.
          </p>

          <div className="hero-cta">
            <a
              className="btn-wa"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
          </div>

          <p className="hero-note">Primeira conversa gratuita · Sem compromisso</p>

          <div className="scroll-hint">
            <span>Saiba mais</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="section">
          <div className="container">
            <p className="section-tag reveal">O que a hipnoterapia transforma</p>
            <h2 className="section-title reveal">
              A mudança começa
              <br />
              na <em>mente</em>
            </h2>

            <div className="benefits-grid">
              <div className="benefit-card reveal">
                <div className="benefit-icon">🌀</div>
                <h3>Ansiedade e Estresse</h3>
                <p>
                  Acesse as raízes emocionais da ansiedade e recondicione padrões
                  automáticos que mantêm você em estado de alerta constante.
                </p>
              </div>
              <div className="benefit-card reveal">
                <div className="benefit-icon">🔓</div>
                <h3>Padrões Limitantes</h3>
                <p>
                  Identifique crenças inconscientes que bloqueiam sua evolução
                  pessoal, profissional e nos relacionamentos.
                </p>
              </div>
              <div className="benefit-card reveal">
                <div className="benefit-icon">✨</div>
                <h3>Autoconhecimento</h3>
                <p>
                  Aprofunde sua conexão com sua essência, compreenda seus
                  padrões e tome decisões alinhadas com quem você realmente é.
                </p>
              </div>
              <div className="benefit-card reveal">
                <div className="benefit-icon">💤</div>
                <h3>Sono e Bem-estar</h3>
                <p>
                  Restabeleça o equilíbrio do sistema nervoso, melhore a
                  qualidade do sono e reduza o impacto do estresse no corpo.
                </p>
              </div>
              <div className="benefit-card reveal">
                <div className="benefit-icon">🎯</div>
                <h3>Foco e Procrastinação</h3>
                <p>
                  Supere o autossabotamento, aumente a clareza mental e retome o
                  movimento em direção aos seus objetivos.
                </p>
              </div>
              <div className="benefit-card reveal">
                <div className="benefit-icon">❤️</div>
                <h3>Relacionamentos</h3>
                <p>
                  Trabalhe padrões relacionais repetitivos, fortaleça vínculos e
                  desenvolva formas mais saudáveis de se conectar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUEM */}
        <section className="for-who">
          <div className="container">
            <p className="section-tag reveal">Para quem é</p>
            <h2 className="section-title reveal">
              Reconhece alguma
              <br />
              dessas <em>situações</em>?
            </h2>

            <div className="tags-wrap reveal">
              <span className="tag-pill">Sinto ansiedade constante</span>
              <span className="tag-pill">Não consigo parar de me autossabotar</span>
              <span className="tag-pill">Quero me conhecer mais profundamente</span>
              <span className="tag-pill">Tenho dificuldade para dormir</span>
              <span className="tag-pill">
                Procrastino sempre que preciso avançar
              </span>
              <span className="tag-pill">Sinto que repito os mesmos padrões</span>
              <span className="tag-pill">Quero superar um luto ou perda</span>
              <span className="tag-pill">Tenho medos que me limitam</span>
              <span className="tag-pill">
                Sinto burnout e esgotamento emocional
              </span>
              <span className="tag-pill">
                Busco algo além da terapia convencional
              </span>
              <span className="tag-pill">
                Quero alinhar mente, corpo e propósito
              </span>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="sobre">
          <div className="container">
            <div className="sobre-inner">
              <div className="sobre-photo reveal">
                <img
                  src={celiAbout}
                  alt="Celi Naname"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div className="sobre-content reveal">
                <p className="section-tag">Sobre</p>
                <h2>
                  Celi Naname
                  <br />
                  Hipnoterapeuta
                </h2>
                <p>
                  Especialista em Hipnose Ericksoniana com certificação
                  internacional, Celi conduz sessões com profundidade, cuidado e
                  método clínico comprovado.
                </p>
                <p>
                  O método Ericksoniano respeita a singularidade de cada pessoa
                  e utiliza a linguagem indireta para acessar recursos internos
                  e promover transformações duradouras — reconhecido pela
                  American Psychological Association.
                </p>
                <p>
                  Atendimentos online para todo o Brasil com a mesma qualidade e
                  presença do consultório presencial em São Paulo.
                </p>

                <div className="sobre-selos">
                  <span className="selo">Certificação Internacional</span>
                  <span className="selo">Hipnose Ericksoniana</span>
                  <span className="selo">Método Científico</span>
                  <span className="selo">Online · Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="depoimentos">
          <div className="container">
            <p className="section-tag reveal">Resultados reais</p>
            <h2 className="section-title reveal">
              O que dizem as
              <br />
              pessoas que <em>transformaram</em>
            </h2>

            <div className="dep-grid">
              <div className="dep-card reveal">
                <p className="dep-text">
                  Depois de anos tentando controlar a ansiedade com força de
                  vontade, a hipnoterapia com a Celi foi o que realmente
                  funcionou. Em poucas sessões senti uma leveza que não sentia
                  há muito tempo.
                </p>
                <span className="dep-author">Ana C. · São Paulo</span>
              </div>
              <div className="dep-card reveal">
                <p className="dep-text">
                  Fiz as sessões 100% online e foi incrível. A Celi cria um
                  espaço tão seguro que você esquece que está na frente de uma
                  tela. Mudou minha relação comigo mesma.
                </p>
                <span className="dep-author">Mariana R. · Belo Horizonte</span>
              </div>
              <div className="dep-card reveal">
                <p className="dep-text">
                  Estava em burnout completo quando procurei a Celi. As sessões
                  me ajudaram a entender os padrões que me levaram ao
                  esgotamento. Me sinto outra pessoa.
                </p>
                <span className="dep-author">Fernanda M. · Rio de Janeiro</span>
              </div>
            </div>

            <div className="reveal">
              <VideoGallery />
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE FORM */}
        <section className="lead-form-section">
          <div className="container">
            <div className="lead-form-container reveal">
              <div className="lead-image-col">
                <img 
                  src="/capa-ebook.jpg" 
                  alt="Livre da Ansiedade com a Hipnose Ericksoniana" 
                  className="lead-cover-img" 
                />
              </div>
              <div className="lead-form-content">
                <h2>Baixe o Guia:<br/><em>Livre da Ansiedade</em></h2>
                <p>
                  O Guia Completo para Transformar sua Mente e Recuperar o Controle da sua Vida com a Hipnose Ericksoniana.
                </p>

                {!isSubmitted ? (
                <form className="lead-form" onSubmit={handleLeadSubmit}>
                  <input
                    type="text"
                    className="lead-input"
                    placeholder="Seu nome"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    className="lead-input"
                    placeholder="Seu melhor e-mail"
                    value={leadEmail}
                    onChange={(e) => setLeadEmail(e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    className="lead-input"
                    placeholder="Seu telefone / WhatsApp"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    required
                  />
                  <label className="lead-checkbox-group">
                    <input 
                      type="checkbox" 
                      className="lead-checkbox" 
                      checked={leadConsent}
                      onChange={(e) => setLeadConsent(e.target.checked)}
                      required
                    />
                    <span className="lead-checkbox-label">
                      Aceito receber comunicações e ofertas sobre hipnoterapia via e-mail ou WhatsApp.
                    </span>
                  </label>
                  <button type="submit" className="btn-download" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Salvando..."
                    ) : (
                      <>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Baixar PDF Agora
                      </>
                    )}
                  </button>
                </form>
              ) : (
                  <div className="success-message">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <p>Obrigado pelo interesse! Seu material está pronto.</p>
                    <a href="/material-exclusivo.pdf" download target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      Clique aqui para baixar
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <div className="container">
            <p className="section-tag reveal">Dúvidas frequentes</p>
            <h2 className="section-title reveal">
              Perguntas sobre
              <br />a <em>hipnoterapia</em>
            </h2>

            <div className="faq-list reveal">
              <div className="faq-item">
                <div className="faq-q">
                  A hipnose é segura? <span>+</span>
                </div>
                <div className="faq-a">
                  Sim. A hipnoterapia ericksoniana é reconhecida por órgãos
                  científicos como a American Psychological Association. Você
                  permanece consciente e no controle durante toda a sessão — não
                  é o que mostram nos filmes ou shows de palco.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  Funciona pela internet? <span>+</span>
                </div>
                <div className="faq-a">
                  Totalmente. O estado de hipnose terapêutica é alcançado
                  através da voz, respiração e linguagem — o ambiente online não
                  interfere na eficácia. Centenas de clientes foram atendidos
                  com excelentes resultados 100% online.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  Quantas sessões são necessárias? <span>+</span>
                </div>
                <div className="faq-a">
                  Depende do objetivo. Muitas pessoas relatam percepções e
                  mudanças já na primeira sessão. Em geral, um processo de 4 a 8
                  sessões é suficiente para trabalhar questões específicas com
                  profundidade.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  Vou perder o controle durante a hipnose? <span>+</span>
                </div>
                <div className="faq-a">
                  Não. A hipnose terapêutica é um estado de atenção focada,
                  semelhante à meditação profunda. Você ouve tudo, pode
                  interromper a qualquer momento e nunca faz nada contra sua
                  vontade ou valores.
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  Como funciona o agendamento? <span>+</span>
                </div>
                <div className="faq-a">
                  Simples: clique em "Agendar pelo WhatsApp", envie a mensagem e
                  a Celi entrará em contato para agendar dia e horário. A
                  primeira conversa é gratuita e sem compromisso.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="cta-final">
          <div className="container">
            <h2 className="reveal">
              Pronta para dar
              <br />o primeiro passo?
            </h2>
            <p className="reveal">
              Primeira conversa gratuita · Sem compromisso · Online para todo o
              Brasil
            </p>
            <a
              className="btn-wa reveal"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>
            © 2026 Celi Naname · Hipnoterapia Ericksoniana
            <br />
            <a href="https://celinaname.com.br" target="_blank">
              celinaname.com.br
            </a>{" "}
            ·{" "}
            <a
              href="https://instagram.com/hipnosecelinaname"
              target="_blank"
            >
              @hipnosecelinaname
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}

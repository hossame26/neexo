"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Est-ce que Neexo est vraiment gratuit ?",
    answer: "Oui, le plan gratuit est 100% gratuit, sans engagement et sans carte bancaire requise. Vous pouvez gerer jusqu'a 5 clients et creer 3 devis/factures par mois. Pour des besoins plus importants, nos plans payants offrent des fonctionnalites illimitees.",
  },
  {
    question: "Puis-je importer mes clients existants ?",
    answer: "Absolument ! Vous pouvez importer vos clients depuis un fichier Excel ou CSV en quelques clics. Notre assistant d'importation vous guide pas a pas pour mapper vos colonnes correctement.",
  },
  {
    question: "Mes donnees sont-elles securisees ?",
    answer: "La securite est notre priorite. Toutes vos donnees sont chiffrees (SSL/TLS), stockees sur des serveurs en France, et sauvegardees quotidiennement. Nous sommes conformes au RGPD.",
  },
  {
    question: "Puis-je personnaliser mes devis et factures ?",
    answer: "Oui, vous pouvez ajouter votre logo, personnaliser les couleurs, les mentions legales, les conditions de paiement, et bien plus. Vos documents auront un aspect 100% professionnel.",
  },
  {
    question: "Comment fonctionne l'essai gratuit de 14 jours ?",
    answer: "En vous inscrivant au plan Pro, vous beneficiez automatiquement de 14 jours d'essai gratuit avec toutes les fonctionnalites. Aucune carte bancaire n'est requise. A la fin de l'essai, vous pouvez continuer avec le plan Pro ou repasser au plan gratuit.",
  },
  {
    question: "Puis-je annuler a tout moment ?",
    answer: "Oui, vous pouvez annuler votre abonnement a tout moment depuis votre espace client. Pas de frais d'annulation, pas de questions. Vos donnees restent accessibles pendant 30 jours apres l'annulation.",
  },
  {
    question: "Proposez-vous un support client ?",
    answer: "Bien sur ! Tous les utilisateurs ont acces a notre centre d'aide et a notre support par email. Les utilisateurs Pro beneficient d'un support prioritaire avec un temps de reponse garanti sous 24h.",
  },
  {
    question: "Neexo fonctionne-t-il sur mobile ?",
    answer: "Oui, Neexo est entierement responsive et fonctionne parfaitement sur mobile et tablette via votre navigateur. Une application mobile native est en cours de developpement et sera disponible prochainement.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-[var(--border)]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[var(--accent)] transition-colors"
      >
        <span className="text-lg font-medium pr-8">{faq.question}</span>
        <span className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[var(--accent)]" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[var(--muted)] leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="section bg-[var(--card)]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Questions frequentes
          </h2>
          <p className="text-xl text-[var(--muted)]">
            Tout ce que vous devez savoir pour bien demarrer
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="bg-[var(--background)] rounded-2xl border border-[var(--border)] px-8">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--muted)]">
            Vous ne trouvez pas la reponse ?{" "}
            <a href="mailto:contact@neexo.fr" className="text-[var(--accent)] hover:underline">
              Contactez-nous
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
